class ContentFooter extends HTMLElement {
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
    
                  .footer {
                    margin-top: 10px;
                    height: 75px;
                    background-color: #296cb5;
                    color: white;
                    text-align: center;
                    padding-top: 30px;
                    font-size: 15px;
                  }
                  
                  .footer a {
                    color: white;
                  }
              </style>
                <div class="footer">
                <p>Copyright &copy; 2023 - <a href="https://Instagram.com/mbkm_aldopradana">Aldo Pradana</a></p>
                </div>`;
  }
}

customElements.define("content-footer", ContentFooter);
