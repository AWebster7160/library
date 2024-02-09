const myLibrary = [];
const addBook = document.querySelector('dialog + button');
const submitBook = document.querySelector('#submit');
const bookDialog = document.querySelector('dialog');
const bookForm = document.querySelector('form');
const bookshelf = document.querySelector('.bookshelf');
let inputTitle;
let inputAuthor;
let inputPages;
let inputs = [];


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
    const book1 = new Book(inputs[0], inputs[1], inputs[2]);
    console.log(book1);
    myLibrary.push(book1);
    console.log(myLibrary);
    return myLibrary;
}

function makeBook() {
    let book = document.createElement('div');
    book.style.display = 'revert';
    let title = document.createElement('h3');
    let author = document.createElement('h4');
    let pages = document.createElement('span');
    let deleteBtn = document.createElement('button');
    book.setAttribute('class', 'book');
    book.setAttribute('id', `${myLibrary.length-1}`)
    title.setAttribute('class', 'title');
    author.setAttribute('class', 'author');
    pages.setAttribute('class', 'pages');
    deleteBtn.setAttribute('class', 'delete-book')
    bookshelf.appendChild(book);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(deleteBtn);
    title.innerText = myLibrary[myLibrary.length-1].title;
    author.innerText = myLibrary[myLibrary.length-1].author;
    pages.innerText = myLibrary[myLibrary.length-1].pages;
    deleteBtn.addEventListener('click', (event) => {
    console.log(event.target.parentNode.id);
    event.target.parentNode.style.display = 'none';
    myLibrary.splice(`${(event.target.parentNode.id)}, 1`);
    return myLibrary;
})
}

submitBook.addEventListener('click', (event) => {
    event.preventDefault();
    getInputs();
    makeBook();
    bookDialog.close();
    bookForm.reset();
})


