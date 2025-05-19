/**
 * Image Modal Module
 * Handles the functionality for the image modal that appears when clicking on product images
 */

export function initImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const closeModal = document.querySelector('.close-modal');
  const productImages = document.querySelectorAll('.product-image:not([data-custom-element])');

  if (!modal || !modalImg || !closeModal) return;

  // Add click event to all regular product images (not in custom elements)
  productImages.forEach(img => {
    img.addEventListener('click', function() {
      openModal(this.src, this.alt || this.closest('.product-card')?.querySelector('h3')?.textContent || '');
    });
  });

  // Listen for custom events from product-card custom elements
  const productCards = document.querySelectorAll('product-card');
  productCards.forEach(card => {
    card.addEventListener('product-image-click', (event) => {
      openModal(event.detail.src, event.detail.alt);
    });
  });

  // Function to open the modal
  function openModal(src, caption) {
    modalImg.src = src;
    modalCaption.textContent = caption;
    modal.showModal();
  }

  // Close modal when clicking the X
  closeModal.addEventListener('click', () => {
    modal.close();
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', function(event) {
    const rect = modal.getBoundingClientRect();
    if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
      modal.close();
    }
  });
}
