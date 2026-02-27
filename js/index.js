const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const container = document.querySelector("#link-container");

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}
function showData(data) {
  console.log(data);
  data.forEach((fisk) => {
    container.innerHTML += `<a href="productlist.html?category=${fisk.category}">${fisk.category}</a>`;
    container.innterHTML = markup;
  });
}
getData();
