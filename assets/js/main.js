const button = document.querySelector('.menu-button');
const navigation = document.querySelector('.primary-nav');

if (button && navigation) {
  const german = document.documentElement.lang === 'de';
  button.addEventListener('click', () => {
    const next = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(next));
    button.setAttribute('aria-label', next ? (german ? 'Menü schließen' : 'Close menu') : (german ? 'Menü öffnen' : 'Open menu'));
    navigation.classList.toggle('is-open', next);
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) {
      navigation.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', german ? 'Menü öffnen' : 'Open menu');
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      navigation.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', german ? 'Menü öffnen' : 'Open menu');
      button.focus();
    }
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.section, .stat-card, .article-card').forEach(element => observer.observe(element));
