document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.manifesto-text');
  if (!el) return;

  const line1 = "Your aircraft deserves more than maintenance.";
  const speed = 38;

  el.innerHTML = '';

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      setTimeout(typeManifesto, 200);
    });
  }, { threshold: 0.5 });

  observer.observe(el);

  function typeManifesto() {
    let i = 0;

    function typeLine1() {
      if (i <= line1.length) {
        el.innerHTML = line1.slice(0, i) +
          '<span class="manifesto-cursor">|</span>';
        i++;
        setTimeout(typeLine1, speed);
      } else {
        // Remove cursor, then fade up line 2
        el.innerHTML = line1;
        setTimeout(showLine2, 350);
      }
    }

    function showLine2() {
      el.innerHTML =
        line1 +
        '<br><span class="manifesto-line2">It deserves a <strong><em>standard.</em></strong></span>';
      // Trigger reflow so transition fires
      const line2el = el.querySelector('.manifesto-line2');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line2el.classList.add('visible');
        });
      });
    }

    typeLine1();
  }
});
