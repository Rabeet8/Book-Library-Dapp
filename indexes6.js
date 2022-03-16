console.log("this es6 version of project 2");
var web3;
async function Connect(){
    await window.web3.currentProvider.enable();
    web3=new web3(window.currentProvider)
}

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Messge:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 2000);
    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you have submitted library form');
    let name = document.getElementById('BookName').value;
    let author = document.getElementById('Author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let nonfiction = document.getElementById('nonfiction');
    let programming = document.getElementById('programming');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (nonfiction.checked) {
        type = nonfiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    ;

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'your book is added');

    }
    else {
        display.show('danger', 'sorry you cannot add this book')
    }
    localStorage.setItem("book.name", "value");
    e.preventDefault();
}

