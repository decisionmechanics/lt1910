//If we don’t assign an arrow function to a variable it becomes an anonymous function

(n: number): number => n ** 3

//Anonymous functions are useful when you only need a function for a single task—i.e. 
// don’t need to reuse it
// For example:
// Arrays have a sort method
// This can be passed a function that takes two parameters and returns
// -1 if the first parameter should appear before the second
// 1 if the first parameter should appear after the second
// 0 if the order of the first and second parameters should be maintained
// Allows the developer to specify a custom sort strategy

const books = [
    { title: "The Lord of the Rings", published: "1954-07-29" },
    { title: "Jurassic Park", published: "1990-11-20" },
];


    console.log("Books sorted by published date:");
for (const book in books.sort( // call the sort method repeatedly
    (a, b) => a.published.localeCompare(b.published) //return 1,0 or 
)) {
    console.log(books[book].title); 
}
//localeCompare is a string method that returns -1, 0 or 1
// depending on the lexicographical order of the string it is called on
// compared to the string passed as a parameter

// The sort method sorts the array in place and also returns a reference to the sorted array
// So we can call sort multiple times on the same array to see different sort orders

console.log("\nBooks sorted by title:");
for (const book in books.sort(
    (a, b) => a.title.localeCompare(b.title)
)) {
    console.log(books[book].title); 
}

