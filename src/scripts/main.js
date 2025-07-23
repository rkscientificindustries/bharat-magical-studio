import "../styles/main.scss";

import { initSlider } from "./modules/slider.js";
import { initProductSlider } from "./modules/slider.js";
import { initImageModal } from "./modules/imageModal.js";
// Import components
import "./components/ProductCard.js";
import "./components/Header.js";
import "./components/Footer.js";

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the hero slider
  initSlider();

  // Initialize the product slider
  initProductSlider();

  // Initialize image modal functionality
  initImageModal();
});
