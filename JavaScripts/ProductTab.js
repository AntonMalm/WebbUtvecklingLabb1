// ProductTab.js
let cost = 0;
const products = [
  {
    imageSrc:
      "../images/KebabPizzaProduct.webp",
    title: "KebabPizza",
    description:
      "Våran populäraste pizza",
    ModalDescription: "En kebabpizza är en läcker kombination av traditionell italiensk pizza toppad med saftigt, kryddat kebabkött. Den kompletteras med fräsch isbergssallad och krämig vitlökssås för en smakfull kontrast. Med varje tugga får du en explosion av smaker som tar din matupplevelse till nästa nivå.",
    price: 130,
  },
  {
    imageSrc: "../images/VesuvioProduct.webp",
    title: "Vesuvio",
    description: "Vesuvion är alltid god",
    ModalDescription: "En Vesuvio-pizza är en klassisk italiensk skapelse med en perfekt balans av tomatsås och smält ost på en krispig deg. Den är enkel men ändå tillfredsställande, och dess renhet i smak gör den till en tidlös favorit. Dess namn, inspirerat av vulkanen Vesuvius, speglar dess ursprung i Neapel, Italien.",
    price: 110,
  },
  {
    imageSrc:
      "../images/KebabIPitaProduct.webp",
    title: "Kebab i pita",
    description: "Pita i bröd, kan det bli godare?",
    ModalDescription: "Kebab i pitabröd är en populär maträtt där saftigt, kryddat kebabkött packas in i ett mjukt och fluffigt pitabröd. Den kompletteras ofta med färska grönsaker och en krämig sås som ger en härlig kontrast till det kryddiga köttet. Denna rätt är både smakrik och mättande, vilket gör den till ett utmärkt val för en snabb och tillfredsställande måltid.",
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
    const moreInfoButton = document.createElement("button");
    const buttonDiv = document.createElement("div"); // Create a div to wrap the buttons

    // Create unique id for each product modal
    const modalId = "modal" + product.title.replace(/\s/g, '');

    // Create modal for each product
    const modal = createModal(modalId, product.ModalDescription);

    applyProductStyles(li, card, cardBody, cardTitle, cardDescription, addButton, moreInfoButton, price);

    cardTitle.innerText = product.title;
    cardDescription.innerText = product.description;

    img.src = product.imageSrc;
    img.alt = "Product Image";
    img.classList.add("card-img-top", "service-img");

    price.innerText = product.price + " kr";
    addButton.innerText = "Lägg till";
    moreInfoButton.innerText = "More Info";

    addButton.onclick = () => addToCart(product);
    moreInfoButton.setAttribute("data-toggle", "modal");
    moreInfoButton.setAttribute("data-target", "#" + modalId);

    buttonDiv.classList.add("mt-auto"); // Add 'mt-auto' class to the button div
    buttonDiv.appendChild(addButton);
    buttonDiv.appendChild(moreInfoButton);

    cardBody.appendChild(img);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(buttonDiv); // Append the button div to the card body
    card.appendChild(cardBody);
    cardBody.appendChild(price);
    li.appendChild(card);
    li.appendChild(modal);  // Append the modal to the product list item

    productList.appendChild(li);
  }
}


function createModal(id, ModalDescription) {
  // Create modal elements
  const modalDiv = document.createElement("div");
  const modalDialog = document.createElement("div");
  const modalContent = document.createElement("div");
  const modalBody = document.createElement("div");
  const modalDescription = document.createElement("p");

  // Set modal attributes
  modalDiv.classList.add("modal", "fade");
  modalDiv.id = id;
  modalDiv.setAttribute("tabindex", "-1");
  modalDiv.setAttribute("role", "dialog");
  modalDiv.setAttribute("aria-labelledby", id + "Label");
  modalDiv.setAttribute("aria-hidden", "true");

  modalDialog.classList.add("modal-dialog");
  modalDialog.setAttribute("role", "document");

  modalContent.classList.add("modal-content");

  modalBody.classList.add("modal-body");
  modalDescription.innerText = ModalDescription;

  // Append elements to modal
  modalBody.appendChild(modalDescription);
  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);
  modalDiv.appendChild(modalDialog);

  return modalDiv;
}



function applyProductStyles(li, card, cardBody, cardTitle, cardDescription, addButton, moreInfoButton, price) {
  li.classList.add("col-sm", "list-group-item", "d-flex", "justify-content-center", "bg-dark", "m-3"); // Add 'm-3' class here
  card.classList.add("card", "border-0", "card-style", "text-center", "bg-dark", "rounded");
  cardBody.classList.add("card-body", "d-flex", "flex-column", "flex-grow-1", "text-white");
  cardTitle.classList.add("card-title");
  cardDescription.classList.add("card-text");
  addButton.classList.add("btn", "btn-primary", "btn-success", "mt-auto");
  moreInfoButton.classList.add("btn", "btn-primary", "mt-auto", "btn-no-margin"); // Add 'btn-no-margin' class here

  price.classList.add("text-grey");
}



window.onload = function () {
  displayProducts();
};


function addToCart(product) {
  const cartList = document.getElementById("cartList");

  const li = document.createElement("li");
  li.dataset.price = product.price; // Store the price in a data attribute
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
  const price = Number(cartItem.dataset.price); // Retrieve the price from the data attribute

  cartList.removeChild(cartItem);
  cost -= price;
  var cartTotal = document.getElementById("CartTotal");
  cartTotal.innerText = "Kundvagnens pris: " + cost + "kr";
}
