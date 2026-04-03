document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let count = 0;
      const timer = setInterval(() => {
        count++;
        current = Math.min(Math.round(increment * count), target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, duration / steps);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
});
