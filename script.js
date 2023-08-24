const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

let books = [];

bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");

    const title = titleInput.value;
    const author = authorInput.value;

    if (title && author) {
        const book = { title, author };
        books.push(book);
        displayBooks();
        titleInput.value = "";
        authorInput.value = "";
    }
});

function displayBooks() {
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${book.title} by ${book.author}</span>
            <button class="edit" onclick="editBook(${index})">Edit</button>
            <button class="delete" onclick="deleteBook(${index})">Delete</button>
        `;
        bookList.appendChild(li);
    });
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

function editBook(index) {
    const newTitle = prompt("Enter new title:");
    const newAuthor = prompt("Enter new author:");

    if (newTitle && newAuthor) {
        books[index].title = newTitle;
        books[index].author = newAuthor;
        displayBooks();
    }
}

displayBooks();
