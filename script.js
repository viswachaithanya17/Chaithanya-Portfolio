// ===== Sticky Header Scroll Effect =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const body = document.body;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  body.classList.toggle('no-scroll');
});

// Close menu when clicking a link
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('no-scroll');
    });
});

// ===== Scroll Reveal Effect =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 150); // stagger delay
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Scroll Indicator Hide/Shrink =====
const indicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
    if (!indicator) return;
    const scrolled = window.scrollY > 50;
    indicator.style.opacity = scrolled ? "0" : "1";
    indicator.style.transform = scrolled ? "scale(0.8)" : "scale(1)";
});

// ===== Hero Parallax Effect =====
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (!hero) return;
    let offset = window.scrollY * 0.4;
    hero.style.backgroundPositionY = `${offset}px`;
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
