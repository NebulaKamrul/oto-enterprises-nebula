document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
  
    if (!navbar) return;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  