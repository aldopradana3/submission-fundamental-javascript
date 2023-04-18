class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
            }
           :host {
               display: block;
               margin-bottom: 18px;
               margin-top: 200px;
               overflow: hidden;
            }
           
           .food-art-info {
               float: right;
               max-width: 40%;
            }

           .food-art-meal {
               border-radius: 10px;
               width: 100%;
               float: right;
            }

           .meal-info {
               width: 55%;
               float: left;
            }
           
           .meal-info > h2 {
               font-size: 60px;
            }
           
           .meal-info > h3 {
               font-size: 30px;
               font-weight: 500;
               margin-top: 10px;
            }

           .meal-info > p {
               margin-top: 10px;
            }
        </style>
        <div class="food-art-info">
        <img class="food-art-meal" src="${this._meal.strMealThumb}" alt="Food Picture">
        <h4 style="margin-top: 420px;">Link Youtube : <br>${this._meal.strYoutube}</h4>
        <h4>Sumber : <br>${this._meal.strSource}</h4>
        </div>
        <div class="meal-info">
               <h2>${this._meal.strMeal}</h2>
               <h3>Kategori : ${this._meal.strCategory}</h3>
               <p>Makanan dari ${this._meal.strArea}<br><br></p>
               <p>5 Bahan Masakan (English) : </p>
               <ul>
                  <li>- ${this._meal.strIngredient1} (${this._meal.strMeasure1})</li>
                  <li>- ${this._meal.strIngredient2} (${this._meal.strMeasure2})</li>
                  <li>- ${this._meal.strIngredient3} (${this._meal.strMeasure3})</li>
                  <li>- ${this._meal.strIngredient4} (${this._meal.strMeasure4})</li>
                  <li>- ${this._meal.strIngredient5} (${this._meal.strMeasure5})</li>
               </ul>
               <p>Cara Membuatnya (English) : <br> ${this._meal.strInstructions}</p>
        </div>
     `;
  }
}

customElements.define("meal-item", MealItem);
