/**
 * Image Modal Module
 * Handles the functionality for the image modal that appears when clicking on product images
 */

export function initImageModal() {
  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeModal = document.querySelector(".close-modal");

  if (!modal || !modalImg || !closeModal) return;

  const heroProductImages = document.querySelectorAll(".hero-slider img");
  heroProductImages.forEach((img) => {
    img.addEventListener("click", function () {
      const caption =
        this.closest(".slide")?.querySelector(".slide-caption")?.textContent ||
        this.alt ||
        "";
      openModal(this.src, caption);
    });
  });

  const productCards = document.querySelectorAll("product-card");
  productCards.forEach((card) => {
    card.addEventListener("product-image-click", (event) => {
      openModal(event.detail.src, event.detail.alt);
    });
  });

  function openModal(src, caption) {
    modalImg.src = src;
    modalCaption.textContent = caption;
    modal.showModal();
  }

  closeModal.addEventListener("click", () => {
    modal.close();
  });
}
