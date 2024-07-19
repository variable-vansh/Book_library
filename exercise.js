// constructor, prototype whatever
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookNumber = bookCounter;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

const newLine = document.createElement("tr");
const tBody = document.createElement("tbody");
const table = document.querySelector("table");

table.appendChild(tBody);

//fills up table on screen form the array content
function displayBooks() {
    //remove the newLine element form row before running loop
    tBody.innerHTML = "";

    for (let book of myLibrary) {

        //made a new row
        const newLine = document.createElement("tr")
        //added that row to the table
        tBody.appendChild(newLine)

        //create remoce button
        let removeButton = document.createElement("button");
        removeButton.innerText = "remove";

        //add remove class to it
        removeButton.classList.add("remove");

        //add event Listener to it
        removeButton.onclick = () => {
            // alert(book.bookNumber)
            myLibrary.splice(book.bookNumber, 1);
            bookCounter--;
            newLine.innerHTML = "";
        }

        //create button to change read status
        let changeButton = document.createElement("button");
        changeButton.innerText = "change";

        //make read status button work
        changeButton.onclick = () => {
            if (book.read != "yes") {
                book.read = "yes";
                displayBooks();
            } else {
                book.read = "no";
                displayBooks()
            }
        }

        //create all the data boxes
        const titleBox = document.createElement("td");
        const authorBox = document.createElement("td");
        const pagesBox = document.createElement("td");
        const readBox = document.createElement("td");

        //add those new boxes to the single row
        newLine.appendChild(titleBox);
        newLine.appendChild(authorBox);
        newLine.appendChild(pagesBox);
        newLine.appendChild(readBox);
        newLine.appendChild(changeButton);
        newLine.appendChild(removeButton);

        //filling in the boxes
        titleBox.innerHTML = book.title;
        authorBox.innerHTML = book.author;
        pagesBox.innerHTML = book.pages;
        readBox.innerHTML = book.read;
    }
}

const myLibrary = [];
let bookCounter = 0;

function addBookToLibrary(title, author, pages, read) {
    bookCounter++;
    myLibrary[bookCounter - 1] = new Book(title, author, pages, read);;
}

//popup form stuff
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");

const newTitle = favDialog.querySelector("#inputTitle");
const newAuthor = favDialog.querySelector("#inputAuthor");
const newPages = favDialog.querySelector("#inputPages");
const newRead = favDialog.querySelector("#inputRead");

const confirmBtn = favDialog.querySelector("#confirmBtn");

// opens up dialog form
showButton.addEventListener("click", () => {
    favDialog.showModal();
});


// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {

    event.preventDefault(); // We don't want to submit this fake form

    //put title, author, pages, read msg together to make new book object
    addBookToLibrary(newTitle.value, newAuthor.value, newPages.value, newRead.value)
    displayBooks()

    //closes the dialog box
    favDialog.close();

});









