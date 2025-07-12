document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in-on-scroll');
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Remove this line if you want it to fade every time it enters
        }
      });
    }, {
      threshold: 0.15
    });
  
    faders.forEach(fader => appearOnScroll.observe(fader));

    window.addEventListener('load', () => {
      document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        el.getBoundingClientRect().top < window.innerHeight && el.classList.add('visible');
      });
    });
    
  });
  