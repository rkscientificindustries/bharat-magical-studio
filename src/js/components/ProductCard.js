export class ProductCard extends HTMLElement {
  static observedAttributes = ["image", "title", "description"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  get image() {
    return this.getAttribute("image") || "";
  }

  get title() {
    return this.getAttribute("title") || "";
  }

  get description() {
    return this.getAttribute("description") || "";
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          flex: 0 0 280px;
          margin: 0 1.5rem;
        }

        .product-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow, 0 4px 6px rgba(0, 0, 0, 0.1));
          transition: all 0.3s ease;
        
          &:hover {
            transform: translateY(-5px);
          }
        }

        .product-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          cursor: pointer;
        }

        h3 {
          padding: 1rem 1rem 0.5rem;
          margin: 0;
          font-weight: 600;
        }

        p {
          padding: 0 1rem 1rem;
          margin: 0;
          color: var(--gray-color, #6c757d);
          font-family: 'Poppins', sans-serif;
        }
      </style>

      <div class="product-card">
        <img src="${this.image}" alt="${this.title}" loading="lazy" class="product-image">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
      </div>
    `;
  }

  addEventListeners() {
    const productImage = this.shadowRoot.querySelector(".product-image");

    productImage.addEventListener("click", () => {
      // Create a custom event that will be handled by the image modal
      const event = new CustomEvent("product-image-click", {
        detail: {
          src: this.image,
          alt: this.title,
        },
      });

      this.dispatchEvent(event);
    });
  }
}

// Define the custom element
customElements.define("product-card", ProductCard);
