const container = document.querySelector(".product-list");

const endpoint = `https://kea-alt-del.dk/t7/api/products`;

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}

function showData(json) {
  let markup = "";
  json.forEach((element) => {
    console.log(element);
    markup += ` <a href="product.html?id=${element.id}">
            <div class="image-wrapper">
              <img class="product-image" src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="taske" />
              <div class="sold-out">Sold Out</div>
            </div>

            <div class="product-info">
              <div class="brand">${element.brandname}</div>
              <div class="name">${element.productdisplayname}</div>
              <div class="price-sale">DKK 599,-</div>
              <div class="sale">
                <span class="price-text">NOW DKK 499,-</span>
                <span class="discount">10%</span>
              </div>
            </div>
          </a>`;
  });
  container.innerHTML = markup;
}

getData();
