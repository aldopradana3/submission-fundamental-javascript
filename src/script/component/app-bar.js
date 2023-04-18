class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              text-decoration: none;
            }

            :host {
              height: 90px;
              background-color: #296cb5;
              position: fixed;
              width: 100%;
              top: 0;
              z-index: 1;
            }  

            .logo {
              float: left;
              padding: 12px 60px;
            }
            
            .logo a {
              color: white;
              font-style: italic;
              font-weight: 1000;
              font-size: 45px;
            }
            
            .logo a:hover {
              color: #299ae0;
            }
            
            :host ul li {
              float: right;
              list-style: none;
            }
            
            :host ul li a {
              color: white;
              float: left;
              font-weight: normal;
              padding: 32px 32px;
              font-size: 23px;
            }
            
            :host ul li a:hover {
              color: #299ae0;
            }
        </style>
        <nav>
        <ul>
          <span class="logo"><a href="#home">Si Malin</a></span>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#home">Home</a></li>
        </ul>
        </nav>`;
  }
}

customElements.define("app-bar", AppBar);
