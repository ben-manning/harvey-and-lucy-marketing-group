const philosophy = document.querySelector('.philosophy');

if (philosophy && window.matchMedia('(min-width: 769px)').matches) {
  const image = philosophy.querySelector('.philosophy-image');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        philosophy.classList.add('philosophy--visible');

        image.addEventListener('transitionend', () => {
          philosophy.classList.add('philosophy--text-visible');
        }, { once: true });

        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(philosophy);
}

// Card staggered fade-up on scroll
const cards = document.querySelectorAll('.card, .testimonial-card');

if (cards.length) {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const siblings = Array.from(card.parentElement.children);
        const index = siblings.indexOf(card);
        card.style.transitionDelay = `${index * 150}ms`;
        card.classList.add('card--visible');
        cardObserver.unobserve(card);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => cardObserver.observe(card));
}
