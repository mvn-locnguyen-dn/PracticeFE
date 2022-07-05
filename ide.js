let productObject = [
    {
        id: "1",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "2",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "3",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "4",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "5",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "6",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "7",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "8",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
    {
        id: "9",
        name: "Bút mực",
        description: "Dụng cụ học tập",
        img: "https://www.keenfootwear.com/on/demandware.static/Sites-keen_eu-Site/-/default/dwfc0cfdef/images/noimagesmall.png",
    },
];
let card = localStorage.getItem("card")
    ? JSON.parse(localStorage.getItem("card"))
    : [];
// let card = localStorage.getItem("card");
localStorage.setItem("productObject", JSON.stringify(productObject));
let ProductObject = localStorage.getItem("productObject");
ProductObject = JSON.parse(ProductObject);
let product_list = document.getElementById("product-list");
console.log(product_list);
let html = "";
for (let i = 0; i < ProductObject.length; i++) {
    html += `
    <li class="product-item col-4 mt-4">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${ProductObject[i].img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${ProductObject[i].name}</h5>
                <p class="card-text">${ProductObject[i].description}</p>
                <a href="#" class="btn btn-primary btn_add" data-id="${ProductObject[i].id}">add cart</a>
            </div>
            </div>
    </li>`;
}
product_list.innerHTML = html;
let num_products = document.querySelector("#num_products");
let num = localStorage.getItem("num")
    ? parseInt(localStorage.getItem("num"))
    : 0;
num_products.innerText = num;
let btn_list = document.getElementsByClassName("btn_add");
for (let btn of btn_list) {
    btn.addEventListener("click", function () {
        num += 1;
        num_products.innerText = num;
        localStorage.setItem("num", num);
        let id = btn.getAttribute("data-id");
        card.push(ProductObject.find((product) => product.id === id));
        localStorage.setItem("card", JSON.stringify(card));
    });
}
