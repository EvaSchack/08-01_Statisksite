const klikkategori = new URLSearchParams(window.location.search).get("category");

const container = document.querySelector(".product-list");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikkategori}`;

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}
const soldOut = `<div class="sold-out">Sold Out</div>`;

function showData(json) {
  let markup = "";
  json.forEach((element) => {
    console.log(element);
    markup += `<a href="productdetails.html?id=${element.id}">
  <div class="image-wrapper ${element.soldout === 1 ? "is-soldout" : ""}">
    <img class="product-image" 
         src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" 
         alt="taske" />

    ${element.soldout === 1 ? `<div class="sold-out">Sold Out</div>` : ""}
  </div>

            <div class="product-info">
              <p class="brand">${element.brandname}</p>
              <h3 class="name">${element.productdisplayname}</h3>
              <div class="price-sale">DKK ${element.price},-</div>
              <div class="sale">
  ${
    element.discount
      ? `
    <span class="price-text">NOW DKK ${element.price - (element.price * element.discount) / 100},-</span>
    <span class="discount">${element.discount}%</span>
  `
      : ""
  }
</div>
            </div>
          </a>`;
  });
  container.innerHTML = markup;
}

getData();
