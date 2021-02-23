// fetch('https://fakestoreapi.com/products')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// creates a card for ea item & appends it to cardsContainer
const createCard = (obj) => {
  const { id, image, price, title } = obj;
  let card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="image-wrapper">
      <img
        class="product-image"
        src="${image}"
        alt="Product image"
      />
    </div>
    <div class="product-info">
      <div class="product-price">$${price.toFixed(2)}</div>
      <div class="product-title">${title}</div>
      <button class="product-button" id="${id}-button">Add to cart</button>
    </div>
  `;

  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.appendChild(card);
};

// async function getData() {
getData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    const myCart = new Cart();
    let walletBalance = 100;

    await data.forEach((item) => {
      createCard(item);
      let itemButton = document.getElementById(`${item.id}-button`);
      itemButton.addEventListener('click', () => {
        myCart.add(item);
      });
    });

    const emptyButton = document.getElementById('empty-button');
    emptyButton.addEventListener('click', () => myCart.empty());

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
      const total = myCart.calculateTotal();

      if (walletBalance >= total) {
        walletBalance = (walletBalance - total).toFixed(2);
        myCart.empty();
        document.getElementById('wallet-balance').innerHTML = walletBalance;
        alert('Success! Your items are on the way.');
      } else {
        alert('Insufficient funds! Empty your cart and try again.');
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

getData();
