document.addEventListener("DOMContentLoaded", () => {
  const line1 = document.querySelector(".typewriter-line1");
  const line2 = document.querySelector(".typewriter-line2");

  const text1 = line1.getAttribute("data-text");
  const text2 = line2.getAttribute("data-text");

  let index1 = 0;

  line1.classList.add("typing");

  function typeLine1() {
    if (index1 < text1.length) {
      line1.textContent += text1.charAt(index1);
      index1++;
      setTimeout(typeLine1, 80);
    } else {
      line1.classList.remove("typing");

      setTimeout(() => {
        line2.textContent = text2;
        line2.classList.add("show");
      }, 400);
    }
  }

  typeLine1();
});
