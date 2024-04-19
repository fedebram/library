const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let i = 0;
  do {
    let title = prompt("Insert title:  ")
    let author = prompt("Insert author: ")
    let pages = prompt("Insert pages: ")
    let read = prompt("Have you read the book?: ");
    myLibrary[i] = new Book(title, author, pages, read);
    i++;
  } while (i < 2);
}

function displayBooks() {
  //for (let i = 0; i < myLibrary.length; i++) {
    myLibrary.forEach((book) => {
      let printBook = document.createElement("div");
      container.appendChild(printBook);
      printBook.textContent = "Title: " + book.title + " Author: " + book.author + " Number of pages: " + book.pages + " Book already read: " + book.read;
    });
}

addBookToLibrary();
displayBooks();







