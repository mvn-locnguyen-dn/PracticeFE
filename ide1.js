let body_card = document.getElementById("body_card");
function load_cart() {
    let item = JSON.parse(localStorage.getItem("card")) || [];
    let html = "";
    for (let i = 0; i < item.length; i++) {
        html += `
    <tr class="${item[i].id}">
        <th>${item[i].id}</th>
        <td>${item[i].name}</td>
        <td><a href="#"><i class="fa fa-trash btn_delete" style="font-size:24px"></i></a></td>
    </tr>
    `;
    }
    body_card.innerHTML = html;
    let btn = document.getElementsByClassName("btn_delete");
    let count = parseInt(localStorage.getItem("num"));
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            e.preventDefault();
            console.log("abc");
            item.splice(i, 1);
            localStorage.setItem("card", JSON.stringify(item));
            localStorage.setItem("num", count-1);
            load_cart();
        });
    }
}
load_cart();
