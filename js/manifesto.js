document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.manifesto-text');
  if (!el) return;

  const line1wrap = el.querySelector('.manifesto-line1-wrap');
  const line2el   = el.querySelector('.manifesto-line2');
  if (!line1wrap || !line2el) return;

  const prefix = "Your aircraft deserves more than just ";
  const dim    = "maintenance.";
  const line1  = prefix + dim;
  const speed  = 38;

  // Pre-reserve full height with transparent placeholder
  line1wrap.innerHTML = '<span style="color:transparent">' + line1 + '</span>';

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
        const visibleFull = line1.slice(0, i);
        const hidden      = line1.slice(i);

        // Split visible portion: prefix in white, dim word in gray (once reached)
        let visibleHTML;
        if (i <= prefix.length) {
          visibleHTML = '<span style="color:white">' + visibleFull + '</span>';
        } else {
          const visiblePrefix = prefix;
          const visibleDim    = visibleFull.slice(prefix.length);
          visibleHTML =
            '<span style="color:white">'                    + visiblePrefix + '</span>' +
            '<span style="color:rgba(255,255,255,0.38)">'  + visibleDim    + '</span>';
        }

        line1wrap.innerHTML =
          visibleHTML +
          '<span class="manifesto-cursor">|</span>' +
          '<span style="color:transparent">' + hidden + '</span>';
        i++;
        setTimeout(typeLine1, speed);
      } else {
        // Done — settle with final colors, no cursor
        line1wrap.innerHTML =
          '<span style="color:white">'                   + prefix + '</span>' +
          '<span style="color:rgba(255,255,255,0.38)">'  + dim    + '</span>';
        setTimeout(showLine2, 350);
      }
    }

    function showLine2() {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line2el.classList.add('visible');
        });
      });
    }

    typeLine1();
  }
});
