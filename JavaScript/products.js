const searchInput2 = document
  .querySelector(".search__input")
  .value.toLowerCase();

function getAllProducts(item) {
  let { image, description, price, id } = item;
  let product = cartProducts.find((el) => el.id === id);
  let isFavourite = favoriteProducts.find((el) => el.id === id);
  return `
    <div  id = "all-card" class="card parent-element">
        <img src="${image}" alt="biscuit"/>
              
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
                    ${getRating(item.rating)}
                </div>
                ${
                  product
                    ? `<button class = "add-to-cart-button btn_main" data-product-id="${id}" onclick = "addToCartLatest(${id})">В корзину
                    
                  </button>`
                    : `<button class = "add-to-cart-button btn_main"  onclick = "addToCartLatest(${id})" >В корзину
                      
                </button>`
                }
                </div>
              </div>`;
}

function getAllCards() {
  document.getElementById("allproducts").innerHTML = "";
  products.forEach((item) => {
    document.getElementById("allproducts").innerHTML += getAllProducts(item);
  });
}
getAllCards();

function addToCartLatest(id) {
  addToCart(id);
  getAllCards();
  getFavouriteOnes();
}

function increaseLatest(id) {
  increase(id);
  getAllCards();
}

function decreaseLatest(id) {
  decrease(id);
  getAllCards();
}

function addToFavoriteLatest(id) {
  addToFavorite(id);
  getAllCards();
}
