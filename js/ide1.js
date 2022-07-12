let id = localStorage.getItem("id");
if (id) {
    localStorage.removeItem('id');
    let title_page = document.getElementById("title_page");
    title_page.innerHTML = 'Edit Book';
    let bookObject = JSON.parse(localStorage.getItem("bookObject"));
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let publisher = document.getElementById("publisher");
    let genre = document.getElementById("genre");
    let price = document.getElementById("price");
    let index;
    for (let i = 0; i < bookObject.length; i++){
        if (bookObject[i].id === id) {
            let price_arr = bookObject[i].price.split("$");
            title.value = bookObject[i].title;
            author.value = bookObject[i].author;
            publisher.value = bookObject[i].publisher;
            genre.value = bookObject[i].genre;  
            price.value = price_arr[0];
            index = i;
        }
    }
    let btn_submit = document.getElementById("btn_submit");
    btn_submit.addEventListener("click", (e) => {
        e.preventDefault();
        bookObject[index].title = document.getElementById("title").value;
        bookObject[index].author = document.getElementById("author").value;
        bookObject[index].publisher= document.getElementById("publisher").value;
        bookObject[index].genre = document.getElementById("genre").value;
        bookObject[index].price = document.getElementById("price").value + "$";
        localStorage.setItem("bookObject", JSON.stringify(bookObject));
        window.location = "index.html";
    });
} else {
    let bookObject = JSON.parse(localStorage.getItem("bookObject"));
    function GetAutoID() {
        if(bookObject.length > 0) {
        return Number.parseInt(bookObject[bookObject.length - 1].id) + 1;
        }
        else{
            return 1;
        }
    }
    let btn_submit = document.getElementById("btn_submit");
    btn_submit.addEventListener("click", (e) => {
        e.preventDefault();
        let id = GetAutoID();
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let publisher = document.getElementById("publisher").value;
        let genre = document.getElementById("genre").value;
        let price = document.getElementById("price").value;
        let book = {
            id: id.toString(),
            title: title,
            author: author,
            publisher: publisher,
            genre: genre,
            price: price + "$",
        };
        bookObject.push(book);
        localStorage.setItem("bookObject", JSON.stringify(bookObject));
        window.location = "index.html";
    });
}
