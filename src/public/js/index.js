// toggles theme button functionality
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

// cards fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-4');
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
});
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
});

// scroll down from the top animation
function onFirstScroll(e) {
  if (e.deltaY > 0) {
    window.removeEventListener('wheel', onFirstScroll);
    window.removeEventListener('touchend', onFirstTouchScroll);
    if (window.scrollY <= 50) {
      document.querySelector('#featured').scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function onFirstTouchScroll(e) {
  window.removeEventListener('wheel', onFirstScroll);
  window.removeEventListener('touchend', onFirstTouchScroll);
  if (window.scrollY <= 50) {
    document.querySelector('#featured').scrollIntoView({ behavior: 'smooth' });
  }
}

window.addEventListener('wheel', onFirstScroll, { passive: true });
window.addEventListener('touchend', onFirstTouchScroll, { passive: true });

window.addEventListener('scroll', function() {
  if (window.scrollY === 0) {
    window.addEventListener('wheel', onFirstScroll, { passive: true });
    window.addEventListener('touchend', onFirstTouchScroll, { passive: true });
  }
});