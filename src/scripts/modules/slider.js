/**
 * Hero Slider Module
 * Handles the functionality for the hero slider and product slider on the home page
 */

export function initSlider() {
  const sliderContainer = document.querySelector(".hero-slider-container");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (!sliderContainer || !slides.length) return;

  let currentIndex = 0;
  const slideWidth = 100; // 100%

  // Set initial position
  updateSliderPosition();

  // Auto slide functionality
  let autoSlideInterval = setInterval(nextSlide, 5000);

  // Event listeners for controls
  prevBtn.addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    prevSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
  });

  nextBtn.addEventListener("click", function () {
    clearInterval(autoSlideInterval);
    nextSlide();
    autoSlideInterval = setInterval(nextSlide, 5000);
  });

  function prevSlide() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    updateSliderPosition();
  }

  function nextSlide() {
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    updateSliderPosition();
  }

  function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }
}

export function initProductSlider() {
  const sliderContainer = document.getElementById("productSliderContainer");
  const prevBtn = document.getElementById("productSliderPrev");
  const nextBtn = document.getElementById("productSliderNext");
  const productCards = sliderContainer
    ? sliderContainer.querySelectorAll("product-card")
    : [];

  if (!sliderContainer || !productCards.length || !prevBtn || !nextBtn) return;

  const scrollAmount = 320; // px, adjust as needed for your card width

  prevBtn.addEventListener("click", () => {
    sliderContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    sliderContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}
