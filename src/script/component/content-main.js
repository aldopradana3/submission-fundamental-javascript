class ContentMain extends HTMLElement {
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

              .utama {
                margin-top: 280px;
                transition: 0.5s;
              }
              
              .desk-kiri h1 {
                font-weight: 800;
                font-size: 60px;
                margin-bottom: 20px;
              }
          </style>
        <div class="utama">
        <span id="home" class="desk-kiri">
          <h1>Kepo Soal <br>Makanan Luar Negeri?</h1>
        </span>
        </div>`;
  }
}

customElements.define("content-main", ContentMain);
