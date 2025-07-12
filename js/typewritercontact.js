document.addEventListener("DOMContentLoaded", () => {
    const line1 = document.querySelector(".typewriter-line1");
    const line2 = document.querySelector(".typewriter-line2");
  
    if (!line1 || !line2) return;
  
    const text1 = line1.dataset.text;
    const text2 = line2.dataset.text;
  
    let index1 = 0;
  
    // Add blinking caret
    line1.classList.add("typing");
  
    function typeLine1() {
      if (index1 < text1.length) {
        line1.textContent += text1.charAt(index1);
        index1++;
        setTimeout(typeLine1, 80);
      } else {
        // Remove caret
        line1.classList.remove("typing");
  
        // Fade in second line
        setTimeout(() => {
          line2.textContent = text2;
          line2.classList.add("show");
        }, 400);
      }
    }
  
    typeLine1();
  });
  