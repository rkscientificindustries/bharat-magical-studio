class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="footer" class="text-white pt-5 pb-3">
        <div class="container">
          <div class="row justify-content-between mb-4">
            <div class="col-md-4 mb-4 mb-md-0">
              <h3 class="h5 mb-3">Contact Us</h3>
              <p class="mb-1">Email: info@rkscientific.com</p>
              <p class="mb-1">Phone: +91 1234567890</p>
              <p class="mb-0">Address: 123 Industrial Area, City, State, India</p>
            </div>
            <div class="col-md-6">
              <h3 class="h5 mb-3">Find Us</h3>
              <div class="responsive-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.399978682554!2d76.8587951750046!3d30.339580574776345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb78dd87d8967%3A0x64525a2c181b1953!2sR.K.%20Scientific%20Industries!5e0!3m2!1sen!2sin!4v1731521611618!5m2!1sen!2sin"
                  width="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <style>
                #footer {
                  background-color: var(--primary-color);
                }
                .responsive-map {
                  aspect-ratio: 16/9;
                  border-radius: 10px;
                  overflow: hidden;
                  display: flex;
                }
                @media (max-width: 767px) {
                  .responsive-map {
                    aspect-ratio: 1/1;
                  }
                }
              </style>
            </div>
          </div>
          <div class="text-center border-top border-white-50 pt-3">
            <p class="mb-0">
              &copy; 2023 R.K. Scientific Industries. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", Footer);
