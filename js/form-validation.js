const form = document.querySelector('form');
const formStatus = document.getElementById('form-status');

const fields = [
  {
    input: document.getElementById('name'),
    error: document.getElementById('name-error'),
    validate(val) {
      if (!val.trim()) return 'Please enter your name.';
      return null;
    }
  },
  {
    input: document.getElementById('email'),
    error: document.getElementById('email-error'),
    validate(val) {
      if (!val.trim()) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) return 'Please enter a valid email address.';
      return null;
    }
  },
  {
    input: document.getElementById('message'),
    error: document.getElementById('message-error'),
    validate(val) {
      if (!val.trim()) return 'Please enter a message.';
      return null;
    }
  }
];

function showError(field, message) {
  field.input.setAttribute('aria-invalid', 'true');
  field.input.classList.add('error');
  field.error.textContent = message;
}

function clearError(field) {
  field.input.removeAttribute('aria-invalid');
  field.input.classList.remove('error');
  field.error.textContent = '';
}

// Clear errors as user corrects individual fields
fields.forEach(field => {
  field.input.addEventListener('input', () => {
    const error = field.validate(field.input.value);
    if (!error) clearError(field);
  });

  field.input.addEventListener('blur', () => {
    const val = field.input.value;
    if (val.trim()) {
      const error = field.validate(val);
      if (error) showError(field, error);
      else clearError(field);
    }
  });
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  let firstInvalid = null;

  fields.forEach(field => {
    const error = field.validate(field.input.value);
    if (error) {
      showError(field, error);
      if (!firstInvalid) firstInvalid = field.input;
    } else {
      clearError(field);
    }
  });

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }

  // Submit to Netlify Forms
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    });

    if (response.ok) {
      form.reset();
      formStatus.className = 'form-status form-status--success';
      formStatus.textContent = 'Thank you — your message has been sent. We\'ll be in touch soon.';
    } else {
      throw new Error('Submission failed');
    }
  } catch {
    formStatus.className = 'form-status form-status--error';
    formStatus.textContent = 'Something went wrong. Please try again.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
