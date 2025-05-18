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
  document.addEventListener('product-image-click', function(event) {
    openModal(event.detail.src, event.detail.alt);
  });

  // Function to open the modal
  function openModal(src, caption) {
    modal.style.display = 'flex';
    modalImg.src = src;
    modalCaption.textContent = caption;

    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
  }

  // Close modal when clicking the X
  closeModal.addEventListener('click', closeImageModal);

  // Close modal when clicking outside the image
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeImageModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      closeImageModal();
    }
  });

  function closeImageModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}
