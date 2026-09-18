const navLinks = [...document.querySelectorAll('nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const updateActiveNav = () => {
  const y = window.scrollY + 110;
  let current = sections[0];
  for (const section of sections) {
    if (section.offsetTop <= y) current = section;
  }
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current.id));
};

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
