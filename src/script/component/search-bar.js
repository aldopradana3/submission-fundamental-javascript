class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
          .search-container {
             max-width: 800px;
             border-radius: 5px;
             display: flex;
             position: sticky;
             margin-top: 25px;
          }
          
          .search-container > input {
             width: 60%;
             padding: 16px;
             border: 0;
             border-bottom: 1px solid #299ae0;
             font-weight: bold;
             font-size: 20px
          }
          
          .search-container > input:focus {
             outline: 0;
             border-bottom: 2px solid #299ae0;
          }
          
          .search-container > input:focus::placeholder {
             font-weight: bold;
          }
          
          .search-container >  input::placeholder {
             color: #299ae0;
             font-weight: normal;
          }
          
          .search-container > button {
             width: 18%;
             cursor: pointer;
             margin-left: 25px;
             padding: 16px;
             background-color: #299ae0;
             color: white;
             border: 0;
          }
          
          @media screen and (max-width: 550px){
             .search-container {
                   flex-direction: column;
                   position: static;
             }
          
             .search-container > input {
                   width: 100%;
                   margin-bottom: 12px;
             }
          
             .search-container > button {
                   width: 100%;
             }
          }
       </style>
       <div id="search-container" class="search-container">
          <input placeholder="Ketik Aja" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">CARI</button>
       </div>
       `;
    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
