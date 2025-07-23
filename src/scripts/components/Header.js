class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white shadow-sm sticky-top">
        <div class="container d-flex justify-content-between align-items-center py-2">
          <div class="d-flex align-items-center">
            <img src="images/logo.jpeg" alt="Logo" class="img-fluid me-2" style="height:48px;object-fit:contain;"/>
            <img src="images/brand-name.jpeg" alt="Brarat Magical Studio" class="img-fluid" style="height:38px;object-fit:contain;"/>
          </div>
          <nav>
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
        </div>
      </header>
    `;
  }
}

customElements.define("app-header", Header);
