/**
 * Hero Slider Module
 * Handles the functionality for the hero slider on the home page
 */

export function initSlider() {
  const sliderContainer = document.querySelector('.hero-slider-container');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (!sliderContainer || !slides.length) return;

  let currentIndex = 0;
  const slideWidth = 100; // 100%

  // Set initial position
  updateSliderPosition();

  // Auto slide functionality
  let autoSlideInterval = setInterval(nextSlide, 5000);

  // Event listeners for controls
  prevBtn.addEventListener('click', function() {
    clearInterval(autoSlideInterval);
    prevSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
  });

  nextBtn.addEventListener('click', function() {
    clearInterval(autoSlideInterval);
    nextSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
  });

  function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSliderPosition();
  }

  function nextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSliderPosition();
  }

  function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }
}