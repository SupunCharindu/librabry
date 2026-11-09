const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    const readStatus = this.read ? "read" : "not read";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus} `;
  };
}

const hobbit = new Book("The Hobbit", "J.R.R.Tolkien", 500, false);
console.log(hobbit.info());
