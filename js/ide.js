let data = [
    {
        id: "1",
        title: "Eloquent JavaScript, Third Edition",
        genre: "Programming",
        author: "Marijn Haverbeke",
        publisher: "No Starch Press",
        price: "50$",
    },
    {
        id: "2",
        title: "Practical Modern JavaScript",
        genre: "JavaScript",
        author: "Nicolás Bevacqua",
        publisher: "O'Reilly Media",
        price: "50$",
    },
    {
        id: "3",
        title: "Understanding ECMAScript 6",
        genre: "Developers",
        author: "Nicholas C. Zakas",
        publisher: "No Starch Press",
        price: "50$",
    },
    {
        id: "4",
        title: "Speaking JavaScript",
        genre: "Programmers",
        author: "Axel Rauschmayer",
        publisher: "O'Reilly Media",
        price: "50$",
    },
    {
        id: "5",
        title: "Learning JavaScript Design Patterns",
        genre: "JavaScript and jQuery",
        author: "Addy Osmani",
        publisher: "O'Reilly Media",
        price: "50$",
    },
    {
        id: "6",
        title: "You Don't Know JS Yet",
        genre: "Get Started",
        author: "Kyle Simpson",
        publisher: "Independently published",
        price: "50$",
    },
    {
        id: "7",
        title: "Pro Git",
        genre: "Git",
        author: "Scott Chacon and Ben Straub",
        publisher: "Apress; 2nd edition",
        price: "50$",
    },
    {
        id: "8",
        title: "Software Engineering",
        genre: "Software",
        author: "Caitlin Sadowski, Thomas Zimmermann",
        publisher: "Apress",
        price: "50$",
    },
];
if (!localStorage.getItem("bookObject")) {
    localStorage.setItem("bookObject", JSON.stringify(data));
}
let bookObject;
const limit = 3;
let page;
let offset;
let count_page;
let pagination_list;
let btn_edit;
let btn_del;
let html_page;
let btn_page;
let btn_next;
let btn_prev;
RenderData("");
function RenderData(arr) {
    if(arr === "") bookObject = JSON.parse(localStorage.getItem("bookObject")) || [];
    else bookObject = arr;
    bookObject.sort((a, b) => b.id - a.id);
    page = Number.parseInt(localStorage.getItem("page")) || 1;
    offset = startoffset(page);
    count_page = Math.ceil(bookObject.length / limit);
    pagination_list = document.getElementsByClassName("pagination-list")[0];
    btn_edit = document.getElementsByClassName("btn_edit");
    btn_del = document.getElementsByClassName("btn_del");
    html_page = `
        <li class="pagination-list-item"><a href="#" id="btn_prev">PREVIOUS</a></li>
    `;
    for (let i = 1; i <= count_page; i++) {
        html_page += `<li class="pagination-list-item btn_pagecurrent"><a href="#" class="btn_page">${i}</a></li>`;
    }
    html_page += `<li class="pagination-list-item"><a href="#" id="btn_next">NEXT</a></li>`;
    pagination_list.innerHTML = html_page;
    html = `
    <li class="table-header">
    <div class="col">Title</div>
    <div class="col">Author</div>
    <div class="col">Publisher</div>
    <div class="col">Genre</div>
    <div class="col">Price</div>
    <div class="col">Actions</div>
    </li>
`;
    for (let i = offset; i < page * limit; i++) {
        if (bookObject[i] === undefined) break;
        html += `
        <li class="table-row">
        <div class="col" data-label="Job Id">${bookObject[i].title}</div>
        <div class="col" data-label="Customer Name">${bookObject[i].author}</div>
        <div class="col" data-label="Amount">${bookObject[i].publisher}</div>
        <div class="col" data-label="Payment Status">${bookObject[i].genre}</div>
        <div class="col" data-label="Payment Status">${bookObject[i].price}</div>
        <div class="col" data-label="Payment Status">
            <a href="#" class="btn_edit" data-id=${bookObject[i].id}><i class="far fa-edit"></i></a>
            <a href="#" class="btn_del" data-id=${bookObject[i].id}><i class="fas fa-trash-alt"></i></a>
        </div>
        </li>
    `;
    }
    responsive_table = document.getElementsByClassName("responsive-table")[0];
    responsive_table.innerHTML = html;
    active_btn();
    localStorage.removeItem("page");
    btn_page = document.getElementsByClassName("btn_page");
    btn_next = document.getElementById("btn_next");
    btn_prev = document.getElementById("btn_prev");
    for (const child of btn_page) {
        child.addEventListener("click", function (e) {
            e.preventDefault();
            page = child.innerText;
            console.log(page);
            changePage(page);
        });
    }
    btn_next.addEventListener("click", function (e) {
        e.preventDefault();
        if (page < numPages()) {
            page++;
            changePage(page);
        }
    });
    btn_prev.addEventListener("click", function (e) {
        e.preventDefault();
        if (page > 1) {
            page--;
            changePage(page);
        }
    });
    for (const btn of btn_edit) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("id", btn.getAttribute("data-id"));
            localStorage.setItem("page", page);
            window.location = "create.html";
        });
    }

    for (const btn of btn_del) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("loc");
            let id = btn.getAttribute("data-id");
            bookObj = JSON.parse(localStorage.getItem("bookObject")) || [];
            const newbookObj = bookObj.filter((obj) => {
                console.log(obj.id);
                return obj.id !== id;
            });
            localStorage.setItem("page", page);
            localStorage.setItem("bookObject", JSON.stringify(newbookObj));
            RenderData("");
        });
    }
}
function numPages() {
    return Math.ceil(bookObject.length / limit);
}
function startoffset(page) {
    return (page - 1) * limit;
}
function active_btn() {
    let btn_pagecurrent = document.getElementsByClassName("btn_pagecurrent");
    for (const child of btn_pagecurrent) {
        if (child.innerText === page.toString()) {
            child.classList.add("active");
        } else {
            child.classList.remove("active");
        }
    }
}
function changePage(page) {
    pagination_list = document.getElementsByClassName("pagination-list")[0];
    responsive_table = document.getElementsByClassName("responsive-table")[0];
    offset_page = startoffset(page);
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();
    html = `
        <li class="table-header">
        <div class="col">Title</div>
        <div class="col">Author</div>
        <div class="col">Publisher</div>
        <div class="col">Genre</div>
        <div class="col">Price</div>
        <div class="col">Actions</div>
        </li>
    `;
    for (let i = offset_page; i < page * limit; i++) {
        if (bookObject[i] === undefined) break;
        html += `
            <li class="table-row">
            <div class="col" data-label="Job Id">${bookObject[i].title}</div>
            <div class="col" data-label="Customer Name">${bookObject[i].author}</div>
            <div class="col" data-label="Amount">${bookObject[i].publisher}</div>
            <div class="col" data-label="Payment Status">${bookObject[i].genre}</div>
            <div class="col" data-label="Payment Status">${bookObject[i].price}</div>
            <div class="col" data-label="Payment Status">
                <a href="#" class="btn_edit" data-id=${bookObject[i].id}><i class="far fa-edit"></i></a>
                <a href="#" class="btn_del" data-id=${bookObject[i].id}><i class="fas fa-trash-alt"></i></a>
            </div>
            </li>
         `;
    }
    responsive_table.innerHTML = html;
    btn_edit = document.getElementsByClassName("btn_edit");
    for (const btn of btn_edit) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("id", btn.getAttribute("data-id"));
            localStorage.setItem("page", page);
            window.location = "create.html";
        });
    }
    for (const btn of btn_del) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let id = btn.getAttribute("data-id");
            bookObj = JSON.parse(localStorage.getItem("bookObject")) || [];
            const newbookObj = bookObj.filter((obj) => {
                console.log(obj.id);
                return obj.id !== id;
            });
            localStorage.setItem("bookObject", JSON.stringify(newbookObj));
            localStorage.setItem("page", page);
            RenderData("");
        });
    }
    active_btn();
}
let searchtitle = document.getElementsByClassName("searchtitle")[0];
searchtitle.addEventListener("input", (e) => {
    let text = searchtitle.value.toLowerCase();
    if (text === "") {
        RenderData("");
    } else {
        bookObject = JSON.parse(localStorage.getItem("bookObject")) || [];
        let datanew = [];
        bookObject.forEach((book) => {
            let title = book.title.toLowerCase();
            if (title.includes(text)) {
                datanew.push(book);
            }
        });
        RenderData(datanew)
    }
});
