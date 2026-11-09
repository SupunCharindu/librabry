const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  Book.prototype.toggleRead = function () {
    this.read = !this.read;
  };

  //   this.info = function () {
  //     const readStatus = this.read ? "read" : "not read";
  //     return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus} `;
  //   };
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("The Lean Startup", "Eric Ries", 320, true);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);
addBookToLibrary("Rich Dad Poor Dad", "Robert T. Kiyosaki", 336, false);

const bookContainer = document.querySelector("#book-container");
function displayBooks() {
  bookContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    // const status = document.createElement("p");
    // status.textContent = book.read ? "Read" : "Not Read";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.dataset.id = book.id;
    removeButton.addEventListener("click", function () {
      const bookIndex = myLibrary.findIndex(
        (libraryBook) => libraryBook.id === book.id,
      );
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    });

    const readBtn = document.createElement("button");
    readBtn.textContent = book.read ? "Read" : "Not Read";
    readBtn.classList.toggle("is-read", book.read);
    readBtn.addEventListener("click", function () {
      book.toggleRead();
      displayBooks();
    });

    card.append(title, author, pages, removeButton, readBtn);
    bookContainer.appendChild(card);
  });
}

displayBooks();

const newBookBtn = document.querySelector("#new-book-btn");

const bookDialog = document.querySelector("#book-dialog");

const closeDialogBtn = document.querySelector("#close-dialog-btn");

newBookBtn.addEventListener("click", function () {
  bookDialog.showModal();
});

closeDialogBtn.addEventListener("click", function () {
  bookDialog.close();
});

const bookForm = document.querySelector("#book-form");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = bookForm.elements.title.value.trim();
  const author = bookForm.elements.author.value.trim();
  const pages = Number(bookForm.elements.pages.value);
  const read = bookForm.elements.read.checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  bookForm.reset();
  bookDialog.close();
});
