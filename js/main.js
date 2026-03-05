import { navbar } from '../partials/navbar.js';
import { footer } from '../partials/footer.js';

document.getElementById('navbar').outerHTML = navbar;
document.getElementById('footer').outerHTML = footer;

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  menu.classList.toggle('nav-open');
});

// Close menu when a nav link is clicked
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('nav-open');
  });
});
