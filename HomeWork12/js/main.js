import { dataProducts } from "./data.js";

const productData = JSON.parse(dataProducts);
const productList = document.querySelector('.products-list');
 
productData.forEach(({id, image, name, discription, price}) => {
    const productEl = `
    <li data-id="${id}" class="card products-list-item">
      <article class="products-item-cart wrp-color">
        <div class="products-item-photo-wrp">
          <a class="products-item-link" href="#">
            <img class="products-item-photo" src="${image}" alt="${image}">
          </a>
        </div>
        <div>
          <h3 class="products-item-title_h3">${name}</h3>
          <p class="products-item-txt">${discription}</p>
          <p class="products-item-price">$${price.toFixed(2)}</p>
        </div>
        <button data-cart class="products-item-btn txt" type="button">
          <svg data-cart width="27" height="25" viewBox="0 0 27 25" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" />
          </svg>
          <span data-cart>Add to Cart</span>
        </button>
      </article>
    </li>`;

    productList.insertAdjacentHTML('beforeend', productEl);
});

const cardItemsTitle = document.createElement('h2');
const cartBtnCount = document.querySelector('.logo-shopping-cart');
const cardItemsList = document.querySelector('.card-items-list');
const cardItemsWrp = document.querySelector('.card-items-wrp');
const shoppingCart = document.querySelector('.header-cart-btn');

// Клик по всей области
window.addEventListener('click', function (event) {
  //Проверка на клик по кнопке карточки
  if(event.target.hasAttribute('data-cart')) {
    const card = event.target.closest('.card');
    
    // Проверка на наличие дочерних элементов списка
    if(cardItemsList.children.length === 0) {
      cardItemsWrp.classList.add('card-items-wrp-size');
      cardItemsTitle.classList.add('card-items-title');
      cardItemsTitle.setAttribute('id', '001');
      cardItemsTitle.innerText = 'Cart Items';
      cardItemsWrp.insertBefore(cardItemsTitle, cardItemsWrp.firstChild);
    }

    // Сохранение данных карточки после клика по кнопке
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.products-item-photo').getAttribute('src'),
      name: card.querySelector('.products-item-title_h3').innerText,
      discription: card.querySelector('.products-item-txt').innerText,
      price: card.querySelector('.products-item-price').innerText,
      quantity: 1
    }

  const itemInCart = cardItemsList.querySelector(`[data-id="${productInfo.id}"]`);
    
  // Проверка на наличие этой карточки в корзине
  if(itemInCart) {
    alert('Вы добавили товар в корзину!');

  } else {
    const productEl = `  
    <li data-id="${productInfo.id}" class="product">
      <button class="btn-del" type="button">Удалить</button>
      <div class="product-content">
        <img class="product-img" src="${productInfo.imgSrc}" alt="${productInfo.name}">
        <div class="product-desc">
          <h2 class="product-name">${productInfo.name}</h2>
          <p class="product-discription">${productInfo.discription}</p>
          <p class="product-price-label">Price: <span class="product-price">${productInfo.price}</span></p>
        </div>
      </div>
    </li>`;
    
    cardItemsList.insertAdjacentHTML('beforeend', productEl);
    console.log(cardItemsList.children.length);
    cartBtnCount.innerText = cardItemsList.children.length;
    cartBtnCount.classList.add('header-cart-btn-count');
  }
  const deleteBtn = document.querySelectorAll('.btn-del');

  // Удаление карточки при клике на крестик
  deleteBtn.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      product.remove();
      cartBtnCount.innerText = cardItemsList.children.length;

      // Проверка на наличие дочерних элементов у списка
      if(cardItemsList.children.length === 0) {
        cardItemsWrp.classList.remove('card-items-wrp-size');
        cardItemsTitle.remove();
        cartBtnCount.classList.remove('header-cart-btn-count');
        cartBtnCount.innerText = '';
      }
    })
  });
  }
})

// Проверка на заполненость корзины при клике на иконку
shoppingCart.addEventListener('click', () => {
  if(cardItemsList.children.length === 0) {
    alert('Корзина пуста!');
  }
});

























// productData.forEach(({name, image, price, color, size, quantity}) => {
//   const productEl = `  
//   <li class="product">
//     <button class="btn-del" type="button">Удалить</button>
//     <div class="product-content">
//       <img class="product-img" src="${image}" alt="${name}">
//       <div class="product-desc">
//         <h2 class="product-name">${name}</h2>
//         <p class="product-price-label">Price: <span class="product-price">$${price}</span></p>
//         // <p class="product-color">Color: ${color}</p>
//         // <p class="product-size">Size: ${size}</p>
//         // <div class="product-qty">
//         //   <label class="input-label">Quantity:</label>
//         //   <input class="input-quantity" type="number" value="${quantity}">
//         // </div>
//       </div>
//     </div>
//   </li>
// `;

// cardItemsList.insertAdjacentHTML('beforeend', productEl);
// });

// const deleteBtn = document.querySelectorAll('.btn-del');
// console.log(deleteBtn);

// deleteBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     const product = button.closest('.product');
//     product.remove();
//   })
// });