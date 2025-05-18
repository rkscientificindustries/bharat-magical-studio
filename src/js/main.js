/**
 * Main JavaScript for Chhapak Website
 * This file imports and initializes all modules and components
 */

// Import modules
import { initSlider } from './modules/slider.js';
import { initProductSlider } from './modules/productSlider.js';
import { initImageModal } from './modules/imageModal.js';
import { initGoogleMaps } from './modules/googleMaps.js';

// Import components
import './components/ProductCard.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the hero slider
  initSlider();

  // Initialize the product slider
  initProductSlider();

  // Initialize image modal functionality
  initImageModal();

  // Initialize Google Maps
  initGoogleMaps();
});
