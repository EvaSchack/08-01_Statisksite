const klikkategori = new URLSearchParams(window.location.search).get("category");
const container = document.querySelector(".product-list");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikkategori}`;

let allData;

// Hent data fra API
function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      allData = data;
      showProducts(allData); // vis alle produkter initialt
    })
    .catch((err) => console.error("Fejl ved hentning af data:", err));
}

// Funktion til at vise produkter
function showProducts(products) {
  let markup = "";

  products.forEach((product) => {
    markup += `
      <a href="productdetails.html?id=${product.id}">
        <div class="image-wrapper ${product.soldout === 1 ? "is-soldout" : ""}">
          <img class="product-image" 
               src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
               alt="${product.productdisplayname}" />
          ${product.soldout === 1 ? `<div class="sold-out">Sold Out</div>` : ""}
        </div>

        <div class="product-info">
          <p class="brand">${product.brandname}</p>
          <h3 class="name">${product.productdisplayname}</h3>
          <div class="price-sale">DKK ${product.price},-</div>
          <div class="sale">
            ${
              product.discount
                ? `<span class="price-text">NOW DKK ${Math.round(product.price - (product.price * product.discount) / 100)},-</span>
                   <span class="discount">${product.discount}%</span>`
                : ""
            }
          </div>
        </div>
      </a>
    `;
  });

  container.innerHTML = markup;
}

// Filter produkter
function filter(e) {
  const valgt = e.target.dataset.gender;

  if (valgt === "all") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender && product.gender.toLowerCase() === valgt.toLowerCase());

    if (udsnit.length === 0) {
      container.innerHTML = `
        <div class="no-products">
          <h2>No products found</h2>
          <p>There are currently no products in this category.</p>
        </div>
      `;
    } else {
      showProducts(udsnit);
    }
  }
}
// Bind filter knapper
document.querySelectorAll(".filterBtn").forEach((button) => button.addEventListener("click", filter));

getData();

/* const klikkategori = new URLSearchParams(window.location.search).get("category");

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

document.querySelectorAll(".buy-btn").forEach((knap) => knap.addEventListener("click", filter));

let allData;

function getData() {
  fetch(endPoint)
    .then((respons) => respons.json())
    .then((data) => {
      allData = data;
      showProducts(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt === "ALL") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter(element => element.gender === valgt);
    showProducts(udsnit);
  }
}
 */
