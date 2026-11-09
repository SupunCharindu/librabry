const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

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
