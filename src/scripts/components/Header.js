class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 250px;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 10px rgba(0,0,0,0.1);
          transition: right 0.3s ease-in-out;
          z-index: 9999;
          padding-top: 60px;
          
          &.show {
            right: 0;
          }
        }
        
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
          
          &.show {
            opacity: 1;
            visibility: visible;
          }
        }
        
        @media (min-width: 768px) {
          .mobile-menu, 
          .mobile-overlay {
            display: none !important;
          }
        }
      </style>
      <header class="bg-white shadow-sm sticky-top">
        <div class="container d-flex justify-content-between align-items-center py-2">
          <div class="d-flex align-items-center brand-link" style="cursor:pointer;">
            <img src="images/logo.jpeg" alt="Logo" class="img-fluid me-2" style="height:48px;object-fit:contain;"/>
            <img src="images/brand-name.jpeg" alt="Brarat Magical Studio" class="img-fluid" style="height:38px;object-fit:contain;"/>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="d-none d-md-block">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link text-dark fw-medium" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark fw-medium" href="about.html">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark fw-medium" href="#footer">Contact</a>
              </li>
            </ul>
          </nav>
          
          <!-- Hamburger button for mobile -->
          <button class="navbar-toggler d-md-none border-0 bg-transparent" type="button" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon d-inline-block" style="width: 24px; height: 24px; background-image: url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e');"></span>
          </button>
        </div>
        
        <!-- Mobile overlay -->
        <div class="mobile-overlay"></div>
        
        <!-- Mobile slide menu -->
        <div class="mobile-menu">
          <nav class="p-4">
            <ul class="nav flex-column">
              <li class="nav-item mb-3">
                <a class="nav-link text-dark fw-medium fs-5" href="index.html">Home</a>
              </li>
              <li class="nav-item mb-3">
                <a class="nav-link text-dark fw-medium fs-5" href="about.html">About Us</a>
              </li>
              <li class="nav-item mb-3">
                <a class="nav-link text-dark fw-medium fs-5" href="#footer">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    `;

    // Add the click event listener for brand
    const brand = this.querySelector('.brand-link');
    if (brand) {
      brand.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }

    // Mobile menu functionality
    const toggler = this.querySelector('.navbar-toggler');
    const mobileMenu = this.querySelector('.mobile-menu');
    const overlay = this.querySelector('.mobile-overlay');
    
    if (toggler && mobileMenu && overlay) {
      // Open mobile menu
      toggler.addEventListener('click', () => {
        mobileMenu.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      });
      
      // Close mobile menu when clicking overlay
      overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = ''; // Restore scroll
      });
      
      // Close mobile menu when clicking menu links
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('show');
          overlay.classList.remove('show');
          document.body.style.overflow = ''; // Restore scroll
        });
      });
    }
  }
}

customElements.define("app-header", Header);
