// Simple fade-in animation on scroll + mobile nav toggle
const sections = document.querySelectorAll(".section");

function handleScroll() {
  if (!sections) return;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", handleScroll, { passive: true });

// Initial state
sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.6s ease";
});

// Run once in case some sections are already visible
handleScroll();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('header');
if (navToggle && header) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('nav-open');
  });
}