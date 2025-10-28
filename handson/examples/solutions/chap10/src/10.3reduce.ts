// Use the reduce method to find the longest title in 
// an array of book titles.

const books = [
"Pride and Prejudice",
"To Kill a Mockingbird",
"1984",
"Moby-Dick",
"The Great Gatsby",
"War and Peace",
"One Hundred Years of Solitude",
"The Catcher in the Rye",
"Brave New World",
"Crime and Punishment"
];
const longestTitle = books.reduce((longest, current) =>
(current.length > longest.length) ? current : longest, "");

console.log("The book with the longest title is: " + longestTitle);
// Output: The book with the longest title is: One Hundred Years of Solitude

// Explanation: The reduce method iterates through the array of book titles,
// comparing the length of each title to find the longest one.
// The initial value for the accumulator is an empty string.