const myLibrary = [];
let bookCount = 0; //serve as index of object inside myLibrary
const container = document.querySelector(".container");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let checkbox = document.querySelector("#checkbox").checked;

  myLibrary[bookCount] = new Book(
    bookCount,
    title,
    author,
    pages,
    checkbox ? "Read" : "Not read"
  );

  dialog.close();
  displayBooks();
  bookCount++;
});


class Book {
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  getRead () {
    this.read = "Not Read";
  }
}


/*
Book.prototype.getRead = function () {
  this.read = "Not Read";
}
*/


function displayBooks() {
  let printBook = document.createElement("div");
  container.appendChild(printBook);
  printBook.setAttribute("id", `_${bookCount}`);
  printBook.setAttribute("data-id", `${bookCount}`);
  printBook.textContent = "Title: " + myLibrary[bookCount].title + " Author: " + myLibrary[bookCount].author + " Number of pages: " + myLibrary[bookCount].pages + " Book already read: ";
  let readButton = document.createElement("input");
  readButton.setAttribute("type", "checkbox");
  readButton.setAttribute("id", "read");
  readButton.setAttribute("name", "read");
  printBook.appendChild(readButton);
  let currentBook = myLibrary[bookCount];
  if (currentBook.read === "Read") readButton.checked = true;
  readButton.addEventListener("change", () => {
    currentBook.getRead();
  });

  let removeBtn = document.createElement("button");
  printBook.appendChild(removeBtn);

  removeBtn.textContent = "Remove the book";
  removeBtn.addEventListener("click", (event) => {
    let divBook = event.target.parentElement;
    let bookId = divBook.dataset.id;

    // id preso dall'id dell'element div
    // var bookId = divBook.id.substring(1);

    // approccio con elemento "azzerato", ma posizione array tenuta
    // myLibrary[bookId] = null;

    // sintassi 1
    let idxToRemove = -1;
    for (let idx = 0; idx < myLibrary.length; idx++) {
      const book = myLibrary[idx];
      if (book.id == bookId) {
        idxToRemove = idx;
        break;
      }
    }

    // sintassi 2
    // let idxToRemove2 = myLibrary.findIndex(book => book.id == bookId);

    // rimuovo se trovato
    if (idxToRemove != -1) {
      // rimuove dall'array
      myLibrary.splice(idxToRemove, 1);
      //rimuove dal dom
      divBook.remove()
    }

    // let divBook = document.querySelector(`#_${bookCount}`);
  });

  form.reset();
}















