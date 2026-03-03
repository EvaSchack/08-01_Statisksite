const fisk = new URLSearchParams(window.location.search).get("id");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${fisk}`;

const container = document.querySelector("#productContainer");

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}

function showData(json) {
  console.log(json);
  container.innerHTML = `<section class="product-detail">
        <img class="product-detail-image" src="https://kea-alt-del.dk/t7/images/webp/640/${json.id}.webp" alt="sokker" />
        <div class="product-details">
          <h2 class="product-name">${json.productdisplayname}</h2>
          <div>
            <p class="product-type"><strong>Type:</strong> ${json.articletype}</p>
            <p class="product-category"><strong>Category:</strong> ${json.category}</p>
            <p class="product-price"><strong>Price:</strong> DKK ${json.price},-</p>
            <p class="stock"><strong>Stock:</strong> ${json.soldout}</p>

            <div>
              <button class="buy-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>`;
}

getData();
