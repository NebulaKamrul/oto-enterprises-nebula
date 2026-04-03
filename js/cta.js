const ctaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const line1 = entry.target.querySelector("h2");
      const line2 = entry.target.querySelector("p");

      const text1 = "Book Your Aircraft Detailing";
      const text2 = "Precision. Care. Mobility. Get started today with a quick quote.";

      line1.textContent = "";
      line2.textContent = "";
      line2.classList.remove("show");
      line2.style.color = "white";

      let index = 0;

      function typeTitle() {
        if (index < text1.length) {
          line1.textContent += text1.charAt(index);
          index++;
          setTimeout(typeTitle, 70);
        } else {
          setTimeout(() => {
            line2.textContent = text2;
            line2.classList.add("show");
          }, 400);
        }
      }

      typeTitle();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

const ctaSection = document.querySelector(".cta-text");
if (ctaSection) {
  ctaObserver.observe(ctaSection);
}
