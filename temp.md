- from the HTML:
    - all stuff is wrapped into a container div
        - simple table heading
        - table element
            - thead
                - a row of all headings
            - tbody
                - empty, to be filled later
        - pop-up dialog thing to take in new book
            - (leaving description blank here, will fill in if feel important)
        - for the dialog pop-up thing:
            - contains a form
                - has 4 divs, title, author, pages, read status
                    - each has a label and input element
                - 2 buttons: confirm and cancel

- from the CSS: 
    - table
        - remove margin in between cells
    - table data and table header
        - border color style set
        - padding set
        - text aligned to center
    - buttons
        - width set to 100% of the width of their container element
    - body
        - flexbox used
        content aligned in the center, both vertically and horizontally
        - height set to 80% of view-height
    - div inside pop-up form:
        - padding betweens div set to 5px
    - for the full form in the box
        - padding of 10px added
    
- form the JS: 
    - constructor function Book
        - takes in title, author, pages and read status
        - makes it into a prototype
            - will be later used to create instances of object using 'new' keyword.
            - also has an info function that returns the book details in a sentence
        - sets bookNumber to bookCounter, will be helpful in deleting
    
    - new row element created using DOM
    - new tbody element created
    - query selector on table

    - tbody is appended into table

    - function to display books
        - innerHTML of tbody set to blank
        - loop run for each book of myLibrary
            - new line(row) for each book
            - that new Line appended to tBody

            - remove button created 
            - innerText on the remove button added
            - eventListener added on the remove button, upon being clicked:
                - .splice acts on array, removing 1 book
                    - every book has it's unique book number
                    - the remove button splices the array from that number
                - upon removing, the bookCounter is decremented as now there is 1 less book.
                - and that Line's innerHTML is set to blank "".
            
            - button created to change read status
            - innerText of that button set to "change"
            - eventListener to that button is added
                - swtiches "yes" to "no" and "no" to "yes"
                - then displays all books now

            - table data elements created to keep delete and remove button.
            - remove button and change button appended to the td

            - data boxes for the book details created
                - title, author, pages, read
            
            - title, author, pages, read, change, remove appended to newLine.

            - respective details of title, author, pages, read status filled in.
    
    - myLIbrary[] array and bookCounter variable initialized

    - addBookToLibrary() function declared
        - title, author, pages, read status passed to it
        - increments bookCounter
        - put the new Book object in the myLibrary[] array
            - index of array is bookCounter-1
    
    - DOM selector on the "add new" button - called showButton
    - DOM selector on the whole pop-up dialog - called favDialog

    - DOM on the input title, author, pages, read status
        - this will be useful later on to access their inner content
    
    - DOM selector on confirm button

    - click event listener on showButton (add new button)
        - opens up pop-up form
    
    - click event listener on confirm button
        - prevents default behaviour of form (I don't need to submit the form)
        - invokes the addBookToLibrary() function and passes input value
        - invokes displayBooks() function
        - closes the whole pop-up
