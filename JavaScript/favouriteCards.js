const favoriteRow = document.getElementById("favourite");

function getFavoriteCards({ id, name, description, price, discount, image }) {
  let product1 = cartProducts.find((el) => el.id === id);
  // let checkFavorite = favoriteProducts.find((el) => el.id === id);
  return ` <div id = "all-card" class="card parent-element">
    <img
      src="${image}"
      alt="${name}"
    />
    <label  class="container__heart">
      <input onclick = "addToFavourite(${id})" checked = "checked " type="checkbox" />
      <div class="checkmark">
        <svg viewBox="0 0 256 256">
          <rect fill="none" height="256" width="256"></rect>
          <path
            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
            stroke-width="20px"
            stroke="#ccc"
            fill="none"
          ></path>
        </svg>
      </div>
    </label>
    <div class="card_body">
      <div class="price">
        <p>${price} ₽</p>
        <span>50,50 ₽</span>
      </div>
      <div class="price_info">
        <p>С картой</p>
        <p>Обычная</p>
      </div>
      <p class="main_info">${description}</p>
      <div class="rating">
        ${getRating(rating)}
      </div>
      ${
        product1
          ? `<button class = "add-to-cart-button btn_main" data-product-id="${id}" onclick = "addToCartLatest(${id})">В корзину
      
    </button>`
          : `<button class = "add-to-cart-button btn_main" data-product-id="${id}" onclick = "addToCart(${id})">В корзину
          
          
        </button>`
      }
    </div>
  </div>`;
}

function getFavCards() {
  favoriteRow.innerHTML = "";
  favoriteProducts.forEach((el) => {
    count++;
    favoriteRow.innerHTML += getFavoriteCards(el);
  });
}
getFavCards();

// function getFavoriteProducts() {
//   favoriteRow.innerHTML = "";
//   if (favoriteProducts.length !== 0) {
//     favoriteProducts.forEach((pr) => {
//       favoriteRow.innerHTML += getProductCard(pr, "favorite");
//     });
//   } else {
//     favoriteRow.innerHTML = `
//       <div class="alert alert-info" role="alert">
//         No favorite products !
//       </div>
//     `;
//   }
// }
