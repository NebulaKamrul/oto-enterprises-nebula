// CTA section: text is pre-loaded in HTML to reserve layout space.
// JS simply sequences the reveals on scroll — no textContent mutations, no layout shift.

const ctaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);

    const title = entry.target.querySelector(".cta-title");
    const sub   = entry.target.querySelector(".cta-sub");
    const btn   = entry.target.querySelector(".btn");

    // Stagger: title → sub → button, each a calm beat apart
    setTimeout(() => {
      if (title) title.classList.add("show");
    }, 150);

    setTimeout(() => {
      if (sub) sub.classList.add("show");
    }, 650);

    setTimeout(() => {
      if (btn) {
        btn.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        btn.style.opacity    = "1";
        btn.style.transform  = "translateY(0)";
      }
    }, 1100);
  });
}, { threshold: 0.5 });

const ctaSection = document.querySelector(".cta-video");
if (ctaSection) {
  // Hide button initially so it joins the staggered sequence
  const btn = ctaSection.querySelector(".btn");
  if (btn) {
    btn.style.opacity   = "0";
    btn.style.transform = "translateY(8px)";
  }
  ctaObserver.observe(ctaSection);
}
