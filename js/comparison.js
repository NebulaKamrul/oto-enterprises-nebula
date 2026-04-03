document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.comparison-wrapper');

  wrappers.forEach(wrapper => {
    const afterImg = wrapper.querySelector('.after-img');
    const handle = wrapper.querySelector('.slider-handle');

    const updateSlider = (x) => {
      const rect = wrapper.getBoundingClientRect();
      const offsetX = x - rect.left;
      const percent = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

      afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
      handle.style.left = `${percent}%`;
    };

    wrapper.addEventListener('mousemove', (e) => {
      updateSlider(e.clientX);
    });

    wrapper.addEventListener('touchmove', (e) => {
      updateSlider(e.touches[0].clientX);
    });

    wrapper.addEventListener('mouseleave', () => {
      afterImg.style.clipPath = `inset(0 0 0 50%)`;
      handle.style.left = `50%`;
    });
  });
});
