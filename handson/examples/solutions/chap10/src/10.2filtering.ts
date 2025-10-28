// Use filter to extract an array of 20th century books from the
// following collection.
const books = [
{
title: "Pride and Prejudice",
published: 1813,
},
{
title: "The Great Gatsby",
published: 1925,
},
{
title: "Ulysses",
published: 1922,
},
{
title: "The Road",
published: 2006,
},
{
title: "Wuthering Heights",
published: 1847,
},
{
title: "To Kill a Mockingbird",
published: 1960,
}
];

const twentiethCenturyBooks = 
    books.filter((book) => 
        (book.published >= 1901 && book.published <= 2000));

    for (const { title, published } of twentiethCenturyBooks) {
        console.log(`${published}, ${title }`);
    }

// Output:
// 1925, The Great Gatsby
// 1922, Ulysses
// 1960, To Kill a Mockingbird