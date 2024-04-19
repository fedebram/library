const myLibrary = [];
const container = document.querySelector(".container");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");
let bookCount = 0; 

showButton.addEventListener("click", () => {
  dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  myLibrary[bookCount] = new Book(title);
  dialog.close();
  displayBooks();
  bookCount++;
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBooks() {
  let printBook = document.createElement("div");
  container.appendChild(printBook);
  printBook.textContent = "Title: " + myLibrary[bookCount].title + " Author: " + myLibrary[bookCount].author + " Number of pages: " + myLibrary[bookCount].pages + " Book already read: " + myLibrary[bookCount].read;
  form.reset();
}














