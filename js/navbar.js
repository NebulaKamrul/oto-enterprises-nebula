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

  const hamburger = document.getElementById("hamburger");
  const navRight = document.querySelector(".nav-right");

  if (hamburger && navRight) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navRight.classList.toggle("open");
      document.body.classList.toggle("nav-open");
    });

    navRight.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navRight.classList.remove("open");
        document.body.classList.remove("nav-open");
      });
    });
  }
});
