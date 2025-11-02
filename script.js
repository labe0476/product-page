const products = [
  { name: "Cap", price: 10000, image: "baseballcap.webp" },
  { name: "Bag", price: 8000, image: "crossbag.webp" },
  { name: "Trouser", price: 55000, image: "longpants.webp" },
  { name: "Sandal", price: 10000, image: "sandal.webp" },
  { name: "Slide", price: 4500, image: "slide.webp" },
  { name: "Tote bag", price: 30000, image: "totebag.webp" },
  { name: "Vext and trouser", price: 15000, image: "vextandtrouser.webp" },
  { name: "Water bottle", price: 50000, image: "waterbottle.webp" },
  { name: "Sandal", price: 5000, image: "sandal3.webp" },
];

let productContainer = document.getElementById("products");

productContainer.innerHTML = products
  .map(function (value, index, array) {
    return `
    <div class="eachItem">
        <img src="images/${value.image}">
        <p class="itemName">${value.name}</p>
        <p class="price">Price: ₦  ${value.price}</p>
        <button class="button">Add to Cart</button>
    </div>
    `;
  })
  .join("");
