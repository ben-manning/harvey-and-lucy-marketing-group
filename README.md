# Harvey & Lucy Growth Partners

![Harvey and Lucy](harvey-and-lucy-banner.png)

A multi-page marketing website for a fictional growth strategy firm, built as a hands-on exercise in semantic HTML, accessibility, and front-end performance.

---

## What This Project Is

A three-page static marketing site featuring a homepage, about page, and contact page with a fully functional form. The site is built without any frameworks or libraries — plain HTML, CSS, and JavaScript only.

---

## Technologies Used

- **HTML5** — semantic elements, ARIA attributes, W3C valid markup
- **CSS3** — custom properties, CSS Grid, Flexbox, responsive mobile layout
- **Vanilla JavaScript** — ES modules, client-side form validation, hamburger nav toggle
- **Netlify** — static hosting, HTTPS, Netlify Forms for contact form submissions

---

## Project Goals

This project was built to practice and validate skills across four areas:

### Accessibility (Target: 100)
- Semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Skip-to-content link
- ARIA labels and live regions
- Logical heading hierarchy
- Keyboard navigation and visible focus states
- WCAG AA contrast ratios verified

### Best Practices (Target: 100)
- HTTPS enforced via Netlify
- W3C valid HTML across all three pages
- No console errors
- Correct image `width` and `height` attributes matching actual asset dimensions
- System font stack (no external font dependencies)

### SEO (Target: 95+)
- Unique `<title>` per page
- `<meta name="description">` on all pages
- Descriptive link text throughout
- Proper heading structure
- `<html lang="en">` on all pages

### Performance
- WebP images throughout
- `loading="lazy"` on non-hero images
- No render-blocking resources
- PurgeCSS applied to remove unused styles

---

## Pages

| Page | Path |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Contact | `contact.html` |

---

## References

- [MDN: Semantic HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)
- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Netlify Forms Docs](https://docs.netlify.com/forms/setup/)
