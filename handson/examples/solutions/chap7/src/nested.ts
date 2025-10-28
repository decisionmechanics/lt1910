// Functions can contain other functions
//Allows us to create helper functions that are only available to their parent functions, leading to better program structuring, while maintaining encapsulation
function displayBooks(books: string[]) {
    
    function displayBook(book: string) {
        console.log(`displayBook: ~~~${book.toUpperCase()}~~~`);
    }
    
    console.log("displayBooks: for loop: " + books.length + " books to display");
    for (const book of books) { 
        displayBook(book); 
    }
}
console.log("passing an array of book titles to displayBooks function");
displayBooks(["Lord of the Rings", "The Dark Tower", "The Hobbit"]);