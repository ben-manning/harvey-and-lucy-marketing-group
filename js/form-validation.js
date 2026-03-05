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

form.addEventListener('submit', e => {
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

  // Simulate successful submission (replace with real fetch when backend is ready)
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  setTimeout(() => {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    formStatus.className = 'form-status form-status--success';
    formStatus.textContent = 'Thank you — your message has been sent. We\'ll be in touch soon.';
  }, 1000);
});
