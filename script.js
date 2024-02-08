const myLibrary = [];
const addBook = document.querySelector('dialog + button');
const submitBook = document.querySelector('#submit');
const bookDialog = document.querySelector('dialog');
const bookForm = document.querySelector('form');
let inputTitle;
let inputAuthor;
let inputPages;
let inputs = [];
let bookNumber;
let bookName = 'book';

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

addBook.addEventListener('click', () => {
    bookDialog.showModal();
})
   

function getInputs() {
    let inputs = [];
    let inputTitle = document.getElementById('title').value;
    let inputAuthor = document.getElementById('author').value;
    let inputPages = document.getElementById('pages').value;
    inputs.push(inputTitle);
    inputs.push(inputAuthor);
    inputs.push(inputPages);
    console.log(inputs);
    var book1 = new Book(inputs[0], inputs[1], inputs[2]);
    myLibrary.push(book1);
    console.log(myLibrary);
}

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    getInputs();
    console.log(myLibrary)
})


function addBookToLibrary() {

} 