/**
 * Product Slider Module
 * Handles the functionality for the product slider on the home page
 */

export function initProductSlider() {
  const sliderContainer = document.querySelector('.product-slider-container');
  const productCards = document.querySelectorAll('.product-slider-container > product-card');
  const prevBtn = document.querySelector('.product-slider-controls .prev-btn');
  const nextBtn = document.querySelector('.product-slider-controls .next-btn');

  if (!sliderContainer || !productCards.length || !prevBtn || !nextBtn) return;

  const cardWidth = 280 + 32; // card width (280px) + margins (16px * 2)
  const visibleCards = Math.floor(sliderContainer.offsetWidth / cardWidth);
  const scrollAmount = cardWidth * 3; // Scroll 3 cards at a time

  // Event listeners for controls
  prevBtn.addEventListener('click', function() {
    sliderContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', function() {
    sliderContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Add touch swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  sliderContainer.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to be considered a swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left, show next cards
      sliderContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right, show previous cards
      sliderContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
