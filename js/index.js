//1. GET books from API
//2.render list of books onto page in an ul
//3.click on a book and be able to see thumbnail, and desc and list of users who liked book
//4.like a book (PATCH request) and update array of users who liked in API
const listOfBooks = document.querySelector('#list')
const bookContent = document.querySelector('#show-panel')
//1. GET books from API
fetch('http://localhost:3000/books')
.then(resp => resp.json())
.then(books => renderBooks(books))
//2.render list of books onto page in an ul
function renderBooks(books) {
  books.forEach(book => {
    listOfBooks.innerHTML += appendBookTitles(book)
  })
  //3.click on a book and be able to see thumbnail, and desc and list of users who liked book
  let listContainer = document.querySelector('#list-panel')
  listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === "LI") {
    }
  })
}
function appendBookTitles(book) {
  return `<li id='${book.id}'>${book.title}</li>`
}
function renderBookContent(book) {
  bookContent.innerHTML = 
}
