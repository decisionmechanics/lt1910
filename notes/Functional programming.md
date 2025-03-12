## Functional programming

TS is a hybrid language. You can write procedural, object-oriented and functional code in it. It’s a very popular functional programming language.

React, the most popular web application development library, actively encourages a functional programming style using JS/TS.

It’s also a great way to approach programming in general.

### What is functional programming?

Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions, avoiding changing state and mutable data.

It emphasises

- immutability
- pure functions that return consistent outputs for given inputs
- the use of first-class functions that can be passed as arguments or returned as values.

Code written in a functional style tends to be more declarative (describes the requirement, rather than the process) and is easier to test.

### Mutable state

Procedural and object-oriented programming tend to involve mutating state. Whenever you modify variables, arrays, object values, etc, you are mutating state.

```ts
let x = 0;
x = 1; // mutation

const primes = [2, 3, 5, 7, 11];
primes.push(13); // mutation

const book = {
  title: "The Lord of the Rings",
  author: "J. R. R. Tolkien",
};

book.title = "The Hobbit"; // mutation
```

### Problems with mutable state

Mutable state is often considered undesirable for several reasons.

- Concurrency issues: Mutable state can lead to race conditions in multi-threaded environments, causing unpredictable behaviour.
- Predictability: It complicates understanding and reasoning about code flow and data changes.
- Side effects: Functions that change state can have unintended consequences, making them harder to test.
- Reproducibility: Functions relying on mutable state can yield different outputs with the same inputs.
- Debugging: Tracing bugs caused by unexpected state changes can be challenging.
- Reusability: Code dependent on mutable state may have hidden dependencies, limiting its reuse.
- Refactoring: Mutable state complicates code restructuring, risking unintended state changes.
- Immutable guarantees: Immutable structures provide guarantees that mutable ones don't.
- History management: Immutability simplifies features like undo/redo or auditing changes.

Mutable state isn't always bad, but its potential pitfalls make careful handling imperative.

One of the primary characteristics of functional programming is its preference for immutable state. New values are created from existing values, as opposed to changing existing values.

TS has several methods and operators that support a functional approach.

### `map`

The `map` method transforms each item in an array to a new (usually derived) item. The length of the destination array is the same as the length of the source array.

A new array is created. The original array remains unchanged.

```ts
const numbers = [1, 2, 3, 4, 5];
const cubes = numbers.map((n) => n ** 3);
console.log(cubes); // [1, 8, 27, 64, 125]
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numbers.length === cubes.length); // true
```

`map` can also transform objects.

```ts
const authors = [
  {
    firstName: "Jane",
    lastName: "Austen",
  },
  {
    firstName: "Mary",
    lastName: "Shelley",
  },
];

const modifiedAuthors = authors.map(({ firstName, lastName }) => ({
  fullname: `${firstName} ${lastName}`,
}));

for (const { fullname } of modifiedAuthors) {
  console.log(fullname);
}
```

### Hands-on: Use `map` to avoid mutating state

The following code converts an array of measurements in inches to ones in centimetres.

```ts
const inches = [1, 2, 3, 4, 5];

const centimetres: number[] = [];

for (const measure of inches) {
  centimetres.push(measure * 2.54);
}

console.log(centimetres);
```

Refactor it to use `map`, thus avoiding the array mutation.

### `filter`

The `filter` method creates a new array containing elements that pass a specified test (provided as a predicate function). Only elements for which the function returns `true` are included in the new array.

The original array remains unaltered.

```ts
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter((n) => n % 2 === 1);
console.log(oddNumbers); // [1, 3, 5, 7, 9]
```

### Hands-on: Filtering

Use `filter` to extract an array of $20^{th}$ century books from the following collection.

```ts
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
  },
];
```

### Method chaining

It’s common to chain functional methods, creating a pipeline of transformations.

```ts
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
  },
];

const twentiethCenturyTitles = books
  .map((book) => ({
    title: book.title,
    century: Math.ceil(book.published / 100),
  }))
  .filter((book) => book.century === 20)
  .map((book) => book.title);

console.log(twentiethCenturyTitles); // ["The Great Gatsby", "Ulysses", "To Kill a Mockingbird"]
```

### `reduce`

The `reduce` method processes an array, executing a provided function on each element to produce a single accumulated result. It takes a callback with two main arguments—an accumulation and the current value. Optionally, it can also accept an initial value for the accumulation.

```ts
const primes = [2, 3, 5, 7, 11];
const total = primes.reduce((accumulation, prime) => accumulation + prime);
console.log(total); // 28
```

`reduce` can be applied to group and count occurrences.

```ts
interface ITally {
  [key: string]: number;
}

let books: { title: string; author: string }[] = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Animal Farm", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

let authorCount: ITally = books.reduce((tally: ITally, { author }) => {
  tally[author] = (tally[author] ?? 0) + 1;
  return tally;
}, {});

console.log(authorCount);
```

### Hands-on: Using `reduce`

Use the `reduce` method to find the longest title in an array of book titles.

```ts
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
  "Crime and Punishment",
];
```

### Additional useful array functions

There are other array methods that are useful when using a functional programming style.

The `find` method searches an array for the first item that satisfies a provided testing function and returns that element. If no element is found, it returns undefined.

```ts
const numbers = [1, 3, 5, 7, 9];
const found = numbers.find((number) => number > 4);
console.log(found); // 5
```

The `some` method tests whether at least one item in an array satisfies a condition. It returns `true` if _any_ item satisfies the condition, otherwise `false`.

```ts
const numbers = [1, 3, 5, 7, 9];
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // false
```

The `every` method checks whether _all_ items in an array satisfy a condition.

```ts
const numbers = [1, 3, 5, 7, 9];
const allOdd = numbers.every((number) => number % 2 === 1);
console.log(allOdd); // true
```

### Hands-on: Using `every`

Using the `every` method, check if _all_ the following students have passed the course (passing grade is 50).

```ts
const students = [
  {
    name: "Alice",
    grade: 55,
  },
  {
    name: "Bob",
    grade: 60,
  },
  {
    name: "Charlie",
    grade: 48,
  },
  {
    name: "David",
    grade: 70,
  },
];
```

### `Object.assign`

`Object.assign` copies keys (and values) from one object to another. Merges are performed from left to right.

```ts
const objectA = { a: 1, b: 2 };
const objectB = { b: 3, c: 4 };
const merged = Object.assign({}, objectA, objectB);
console.log(merged); // { a: 1, b: 3, c: 4 }
```

### Spread operator

The spread operator (`...`) allows an array, string, or object to be expanded in places where zero or more elements or properties are expected.

- In function calls, it spreads elements as arguments
- In arrays, it spreads elements into a new array
- In objects, it spreads properties into a new object

It's useful for copying arrays/objects, merging them, or passing them as separate arguments in functions.

The `Math.max` function takes the numbers to be compared as separate parameters.

```ts
console.log(Math.max(9, 4, 6, 1, 4, 8, 0));
```

However, the numbers we want to compare are frequently in an array. We can use the spread operator to transform the array items to parameters.

```ts
const numbers = [9, 4, 6, 1, 4, 8, 0];
console.log(Math.max(...numbers));
```

To add a new value to the end of an array, without modifying the original array, we can, again, turn to the spread operator.

```ts
const primes = [2, 3, 5, 7, 11];
const morePrimes = [...primes, 13];
console.log(morePrimes); // [2, 3, 5, 7, 11, 13]
console.log(primes === morePrimes); // false
```

To update, or extend, an object, without modifying the existing object, we can, yet again, use the spread operator.

```ts
const iRobot = {
  title: "I, Robot",
  author: "Isaac Asimov",
};

const fantasticVoyage = {
  ...iRobot,
  title: "Fantastic Voyage",
  published: "1966",
};

console.log(iRobot);
// {title: 'I, Robot', author: 'Isaac Asimov'}
console.log(fantasticVoyage);
// {title: 'Fantastic Voyage', author: 'Isaac Asimov', published: '1966'}
```

### Hands-on: Spreading arrays

Use the spread operator to append two arrays.

### Shallow vs deep cloning

It’s _very_ important to understand that, when we’ve been copying arrays and objects, we’ve been creating _shallow_ clones.

Shallow cloning creates a new object or array by copying only the top-level properties. If a nested value is an object or array, its reference is copied, not the actual content. Deep cloning creates a new object, copying all levels of properties, ensuring unique references for nested objects or arrays.

```ts
const books = [
  {
    title: "War of the Worlds",
    author: "H. G. Wells",
  },
  {
    title: "2001: A Space Odyssey",
    author: "Arthur C. Clarke",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
];

const clonedBooks = [...books];
console.log(books === clonedBooks); // false
clonedBooks[0].title = "The Time Machine";
console.log(books[0].title); // The Time Machine
```

Shallow cloning is the default as it’s computationally inexpensive. Deep cloning is rarely required.

If you _must_ create a deep clone, you can use the `structuredClone` function.

```ts
const books = [
  {
    title: "War of the Worlds",
    author: "H. G. Wells",
  },
  {
    title: "2001: A Space Odyssey",
    author: "Arthur C. Clarke",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
  },
];

const clonedBooks = structuredClone(books);
console.log(books === clonedBooks); // false
clonedBooks[0].title = "The Time Machine";
console.log(books[0].title); // War of the Worlds
console.log(clonedBooks[0].title); // The Time Machine
```

While this code _looks_ simple, the `structuredClone` call could result in a significant performance hit for a large, nested data structure.
