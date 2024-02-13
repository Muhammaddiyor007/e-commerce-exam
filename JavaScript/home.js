const app = [
  {
    id: 1,
    title: "Оформите карту «Северяночка»",
    description: "И получайте бонусы при покупке в магазинах и на сайте.",
    image: "../assets/images/Home/home-card-images/app-card-1.png",
  },
  {
    id: 2,
    title: "Покупайте акционные товары",
    description: "И получайте вдвое больше бонусов.",
    image: "../assets/images/Home/home-card-images/app-card-2.png",
  },
];

const stati = [
  {
    id: 1,
    title: "Режим использования масок и перчаток на территории магазинов",
    description: ` Подробная информация о режимах использования масок и перчаток на
      территории магазинов "ЛЕНТА". Информация обновляется каждый будний
      день.`,
    image: "../assets/images/Home/home-card-images/stati-1.png",
    date: "05.03.2021",
  },
  {
    id: 2,
    title: "Весеннее настроение для каждой  и праздничных тёплых пожеланий",
    description: ` 8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
    image: "../assets/images/Home/home-card-images/stati-2.png",
    date: "02.05.2023",
  },
  {
    id: 3,
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    description: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!.`,
    image: "../assets/images/Home/home-card-images/stati-3.png",
    date: "22.02.2020",
  },
];

// DISCOUNT SECTIOINS PRODUCTS
const categories = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];

function getDiscountProducts(item) {
  let { image, description, discount, name, price, id } = item;
  let product = cartProducts.find((el) => el.id === id);
  let isFavourite = favoriteProducts.find((el) => el.id === id);
  if (item.discount > 0) {
    return `<div id = "all-card-${id}" class="card parent-element">
              <img
                src="${image}"
                alt="biscuit"
              />
              
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
                    : `<button class = "add-to-cart-button btn_main" data-product-id="${id}" onclick = "addToCartLatest(${id})">В корзину
                    
                  </button>`
                }
              </div>
            </div>`;
  }
}

let discountProducts = products.slice(1, 5);

function getDiscountHasProducts() {
  document.getElementById("root").innerHTML = "";
  discountProducts.forEach((item) => {
    if (item.discount > 0) {
      document.getElementById("root").innerHTML += getDiscountProducts(item);
    }
  });
}
getDiscountHasProducts();

// NEW PRODUCTS
const lastestProducts = products.slice(0, 4);

function getProductCard(item) {
  let { image, description, price, name, id } = item;
  let product = cartProducts.find((el) => el.id === id);
  let isFavourite = favoriteProducts.find((el) => el.id === id);
  return `
    <div  id = "all-card" class="card parent-element">
               <img 
                 src="${image}"
                 alt="biscuit"
               />
               
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
                     : `<button class = "add-to-cart-button btn_main" data-product-id="${id}" onclick = "addToCartLatest(${id})" >В корзину
                      
                      </button>`
                 }
               </div>
             </div>
  `;
}

function getLastestProducts() {
  document.getElementById("roots").innerHTML = "";
  lastestProducts.forEach((item) => {
    document.getElementById("roots").innerHTML += getProductCard(item);
  });
}
getLastestProducts();

function addToCartLatest(id) {
  addToCart(id);
  getLastestProducts();
  getDiscountHasProducts();
  getHighestProducts();
}

function increaseLatest(id) {
  increase(id);
  getLastestProducts();
  getDiscountHasProducts();
  getHighestProducts();
}

function decreaseLatest(id) {
  decrease(id);
  getLastestProducts();
  getDiscountHasProducts();
  getHighestProducts();
}

function addToFavoriteLatest(id) {
  addToFavorite(id);
  getLastestProducts();
  getDiscountHasProducts();
  getHighestProducts();
}

//  HIGHT RATED PRODUCTS SECTION
function findLastFiveHighestRatedProducts(products) {
  products.sort((a, b) => a.rating - b.rating);

  const lastFiveProducts = products.slice(1, 5);

  return lastFiveProducts;
}
const lastFiveHighestRatedProducts = findLastFiveHighestRatedProducts(products);

function getHighRatedProducts(item) {
  let { image, description, price, name, id } = item;
  let product = cartProducts.find((el) => el.id === id);
  let isFavourite = favoriteProducts.find((el) => el.id === id);

  return `<div id = "card"  class="card parent-element">
              <img 
                src="${image}"
                alt="biscuit"
              />
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
                    ? `
                  </button>`
                    : `<button class = "add-to-cart-button btn_main" data-product-id="${id}" onclick = "addToCartLatest(${id})">В корзину
                    
                  </button>`
                }
              </div>
            </div>`;
}

function getHighestProducts() {
  document.getElementById("high-rated").innerHTML = "";
  lastFiveHighestRatedProducts.forEach((item) => {
    console.log(item);
    document.getElementById("high-rated").innerHTML +=
      getHighRatedProducts(item);
  });
}
getHighestProducts();

// app section
const appSection = [
  ...new Set(
    app.map((item) => {
      return item;
    })
  ),
];

document.getElementById("app_container").innerHTML = appSection
  .map((item) => {
    let { image, description, title } = item;
    if (item.id === 1) {
      return ` <div class="box">
             <div class="box__info">
               <h4>${title}</h4>
               <p>${description}</p>
             </div>
             <div class="cover_img">
               <img
                 class="app_img"
                 src="${image}"
                 alt="Северяночка"
               />
             </div>
           </div>
          `;
    } else if (item.id === 2) {
      return ` <div class="box second_box">
            <div class="box__info">
              <h4>${title}</h4>
              <p>${description}</p>
            </div>
            <div class="cover_img">
              <img
                class="app_img"
                src="${image}"
                alt="Северяночка"
              />
            </div>
          </div>`;
    }
  })
  .join("");

// app section
const statiContents = [
  ...new Set(
    stati.map((item) => {
      return item;
    })
  ),
];

document.getElementById("stati-root").innerHTML = statiContents
  .map((item) => {
    let { image, description, title, date, id } = item;
    if (item.id === 1) {
      return ` <div class="card">
             <img
               src="${image}"
               alt=""
             />
             <span class="date">${date}</span>
             <h4>
               ${title}
             </h4>
             <p>
               ${description}
             </p>
             <button>Вce cтатьи
    
  </button>
           </div>
          `;
    } else if (item.id === 2) {
      return ` <div class="card">
            <img
              src="${image}"
              alt=""
            />
            <span class="date">${date}</span>
            <h4>
              ${title}
            </h4>
            <p>
              ${description}
            </p>
            <button>Вce cтатьи
    
  </button>
          </div>`;
    } else {
      return ` <div class="card">
          <img
            src="${image}"
            alt=""
          />
          <span class="date">${date}</span>
          <h4>
            ${title}
          </h4>
          <p>
            ${description}
          </p>
          <button>Вce cтатьи
    
  </button>
        </div>`;
    }
  })
  .join("");
