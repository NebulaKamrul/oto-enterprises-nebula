const carousel = document.getElementById('testimonialTrack');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

const cardWidth = carousel.querySelector('.testimonial-card').offsetWidth + 32; // 32px = gap

leftArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});
