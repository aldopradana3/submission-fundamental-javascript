class ContentArticle extends HTMLElement {
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
  
                .isi {
                    padding-top: 210px;
                    padding-bottom: 210px;
                  }
                  
                  .desk-malin {
                    width: 100%;
                    text-align: center;
                  }
                  
                  .desk-malin h1 {
                    font-weight: 800;
                    font-size: 35px;
                  }
                  
                  .desk-malin p {
                    font-weight: 300;
                    font-size: 20px;
                    padding-top: 30px;
                  }
            </style>
            <div class="isi">
            <article id="kelebihan" class="desk-malin">
              <h1>Si Malin | Website Pencari Makanan Luar Negeri</h1>
              <p>
                Si Malin merupakan sebuah aplikasi pencari informasi makanan di luar negeri. Tujuan dari aplikasi ini dibuat adalah untuk mengedukasi pengunjung website yang ingin menggali informasi seputar makanan di luar negeri. Informasi yang ditampilkan adalah tentang kategori makanan, asal makanan, dan tata cara dalam memasak makanan yang ingin dicari.
              </p>
            </article>
          </div>`;
  }
}

customElements.define("content-article", ContentArticle);
