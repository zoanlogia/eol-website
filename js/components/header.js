const headerTemplate = document.createElement("template");

class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header class="header_section">
    <div class="container">
    <nav class="navbar navbar-expand-lg custom_nav-container ">
    <a class="navbar-brand" href="index.html">
    <img src="images/logo/logo-removebg.png" width="100px" />
    <span>Medsharing</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class=""> </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">La société <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html"> e-CRF</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="departments.html">Solutions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="doctors.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Support</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Devis</a>
            </li>
            <form class="form-inline">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
    `;
  }
}

customElements.define("header-component", Header);
