// ProductTab.js
let cost = 0;
const products = [
  {
    imageSrc:
      "../images/KebabPizzaProduct.webp",
    title: "KebabPizza",
    description:
      "Våran populäraste pizza med svenskt nötkött tillsammans med världens godaste kebabsås",
    price: 130,
  },
  {
    imageSrc: "../images/VesuvioProduct.webp",
    title: "Vesuvio",
    description: "För dig som inte vill sticka ut, trots detta alltid god",
    price: 110,
  },
  {
    imageSrc:
      "../images/KebabIPitaProduct.webp",
    title: "Kebab i pita",
    description: "Pita i bröd, kan det bli godare?",
    price: 99,
  },
];

function displayProducts() {
  const productList = document.getElementById("productList");

  for (const product of products) {
    const li = document.createElement("li");
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardDescription = document.createElement("p");
    const img = document.createElement("img");
    const price = document.createElement("p");
    const addButton = document.createElement("a");

    applyProductStyles(li, card, cardBody, cardTitle, cardDescription, addButton, price);

    cardTitle.innerText = product.title;
    cardDescription.innerText = product.description;

    img.src = product.imageSrc;
    img.alt = "Product Image";
    img.classList.add("card-img-top", "service-img");

    price.innerText = product.price + " kr";
    addButton.innerText = "Lägg till";

    addButton.onclick = () => addToCart(product);

    cardBody.appendChild(img);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(addButton);
    card.appendChild(cardBody);
    cardBody.appendChild(price);
    li.appendChild(card);

    productList.appendChild(li);
  }
}

function applyProductStyles(li, card, cardBody, cardTitle, cardDescription, addButton, price) {
  li.classList.add("col-sm", "list-group-item", "d-flex", "justify-content-center");
  card.classList.add("card", "border-0", "card-style", "text-center", "m-3", "bg-dark");
  cardBody.classList.add("card-body", "d-flex", "flex-column", "flex-grow-1", "text-white");
  cardTitle.classList.add("card-title");
  cardDescription.classList.add("card-text");
  addButton.classList.add("btn", "btn-primary", "btn-success", "mt-auto");
  price.classList.add("text-grey");
}


window.onload = function () {
  displayProducts();
};


function addToCart(product) {
  const cartList = document.getElementById("cartList");

  const li = document.createElement("li");
  const cartItem = document.createElement("div");
  const itemName = document.createElement("span");
  const removeButton = document.createElement("button");

  cost += product.price;
  var cartTotal = document.getElementById("CartTotal");
  cartTotal.innerText = "Kundvagnens pris: " + cost + "kr";


  cartItem.classList.add("cart-item", "d-flex", "mb-2", "p-2", "mg-4");
  itemName.innerText = product.title;
  removeButton.innerText = "Ta bort";
  removeButton.classList.add("btn", "btn-danger", "btn-sm");
  removeButton.onclick = () => removeCartItem(li);

  cartItem.appendChild(itemName);
  cartItem.appendChild(removeButton);
  li.appendChild(cartItem);

  cartList.appendChild(li);
}

function removeCartItem(cartItem) {
  const cartList = document.getElementById("cartList");
  cartList.removeChild(cartItem);
}



