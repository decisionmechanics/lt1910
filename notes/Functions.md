## Functions

Functions are a fundamental part of good (TS) development. They

- add structure to programs
- reduce repetition
- encapsulate behaviour
- provide layers of abstract (easing cognitive load)

Good use of functions to structure a program into independent units of behaviour is part of what distinguishes an experienced developer from a beginner.

### What is a function?

A function is a block of statements labelled with an identifier. This allows the entire block to be referred to by this identifier.

```ts
function displayGreeting() {
  console.log("Hi.");
  console.log("How are you today?");
}

displayGreeting();
```

Once the `displayGreeting` function has been defined you can use it everywhere and get a consistent greeting.

Note that it’s common to use action/verb oriented names for functions.

### Hands-on: Signature function

Create a function that prints out your contact details and call it to produce the output.

### Functions vs subroutines

TS doesn’t have a formal distinction (i.e. at the language level) between a function and a subroutine.

A subroutine is a function that doesn’t return a value, and is called for the side-effect it produces. The previous `displayGreeting` function was a subroutine. It has the side-effect of displaying text.

A “true” function will return a value.

```ts
function getPi(): number {
  return 3.14;
}

console.log(getPi());
```

In TS, both subroutines and “true” functions are usually referred to generically as “functions”.

### Hands-on: Inferring function return types

Create the following function definition.

```ts
function getPi() {
  return 3.14;
}
```

Hover over the name of the function and notice the type inference at play.

While TS can often infer the return type of a function, explicitly defining types makes it clear to a developer reading the code, and ensures that the return type is what we _want_ it to be.

### Parameterising functions

Functions can take parameters that influence the operation of the function.

```ts
function raiseToPower(base: number, exponent: number): number {
  return base ** exponent;
}

console.log(raiseToPower(2, 3)); // 8
```

Parameterising functions makes them more reusable. However, too many parameters can make functions difficult to use. Striking the correct balance is a design skill.

### Hands-on: Create a distance conversion function

Write a function, `convertInchesToCentimetres`  that takes a distance in inches as a parameter and returns the corresponding distance in centimetres. Make sure it’s explicitly typed.

Use the function to convert 12 inches to centimetres.

### Hands-on: Calculate averages

Write a function that takes an array of numbers and returns the average (mean) value of that array.

### Optional arguments

In TS, functions can be defined to allow optional parameters.

Here’s how we can refactor the `raiseToPower` function to square values if no exponent is provided.

```ts
function raiseToPower(base: number, exponent: number = 2): number {  
  return base ** exponent;
}

console.log(raiseToPower(2, 3)); // 8
console.log(raiseToPower(2)); // 4
```

### Hands-on: Create a generic imperial-to-metric conversion function

Create a function that takes an imperial measure value, and a conversation factor, and returns the converted metric value. Set the default conversation factor to be 2.54 (i.e. the ratio of centimetres to inches).

### Local variables

As the body of a function is a block, any variables we define within it will be scoped locally to the function.

```ts
let i = 999;

function countdown() {
  for (let i = 10; i > 0; i--) { // i is local
    console.log(`${i}...`);
  }

  console.log("Lift off!");
}

console.log(i); // 999
```
 
Parameter values are also scoped to the life of the function call.

```ts
let n = 999;

function cube(n: number): number {
  n = n ** 3;

  return n;
}

const cubeOf3 = cube(3);

console.log(cubeOf3);
console.log(n); // 999
```

This supports encapsulation. We don’t have to worry about the environment outside of the function.

### Nested functions

Functions can contain other functions. This allows us to create helper functions that are only available to their parent functions, leading to better program structuring, while maintaining encapsulation.

```ts
function displayBooks(books: string[]) {
  function displayBook(book: string) {
    console.log(`~~~${book.toUpperCase()}~~~`);
  }

  for (const book of books) {
    displayBook(book);
  }
}

displayBooks([
  "Lord of the Rings",
  "The Dark Tower",
  "The Hobbit",
]);
```

### Arrow functions

There are several different ways to create functions in TS. One approach that has become increasingly popular is the use of arrow functions.

```ts
const cube = (n: number): number => n ** 3;
console.log(cube(3));
```

Parameters are defined to the left of the arrow and the body of the function is to the right of it.

Subroutines can also be defined as arrow functions.

```ts
const displayGreeting = () => {
  console.log("Hi.");
  console.log("How are you today?");
}

displayGreeting();
```

Arrow functions have become popular due to their succinct syntax and simpler semantics (e.g. they bind `this` to their parents’ `this`—rather than, for example, to the owning object).

### Hands-on: Refactor to arrow function

Refactor the `raiseToPower` function to use the arrow function syntax.

```ts
function raiseToPower(base: number, exponent: number = 2): number {
  return base ** exponent;
}
```

### Anonymous (lambda) functions

If we don’t assign an arrow function to a variable it becomes an anonymous function.

```ts
(n: number): number => n ** 3
```

Anonymous functions are useful when you only need a function for a single task—i.e. don’t need to reuse it.

Arrays have a `sort` method. This can be passed a function that takes two parameters and returns

- -1 if the first parameter should appear before the second
- 1 if the first parameter should appear after the second
- 0 if the order of the first and second parameters should be maintained

This allows the developer to specify a custom sort strategy.

```ts
const books = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    published: "1998-07-02",
  },
  {
    id: 2,
    title: "Jurassic Park",
    published: "1990-11-20",
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    published: "1954-07-29",
  },
];

for (const book in books.sort((a, b) =>
  a.published.localeCompare(b.published)
)) {
  console.log(books[book].title);
}

console.log("-----");

for (const book in books.sort((a, b) => a.published.localeCompare(b.title))) {
  console.log(books[book].title);
}  
```

### Recursive functions

Functions can call themselves. This can be a powerful mechanism for solving problems that can be decomposed into smaller problems—although it can result in code that is difficult to read.

The following function computes the $n^{th}$ number in the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence).

```ts
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### Hands-on: Calculate factorials

Create a recursive function to calculate $n!$ (the factorial of n). Check your output against `Math.factorial`.

Refactor your recursive factorial function to use a loop instead of recursion.

### The call stack

The call stack represent the list of functions that are currently executing. Every time a new function is called, it’s added to the call stack. It’s removed when the function completes.

The call stack is an important tool when debugging broken applications. Knowing the chain of execution that led to the error is essential information for identifying and fixing the underlying problem.

The following code produces an error.

```ts
function a() {
  b();
}

function b() {
  c();
}

function c() {
  d();
}

function d() {
  throw new Error();
}

a();
```

The call stack is output and you can see the chain of execution.

```
Uncaught Error Error
    at d (file:.../app.js:13:11)
    at c (file:.../app.js:10:5)
    at b (file:.../app.js:7:5)
    at a (file:.../app.js:4:5)
    at <anonymous> (file:.../app.js:15:1)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at executeUserEntryPoint (node:internal/modules/run_main:86:12)
    at <anonymous> (node:internal/main/run_main_module:23:47)
Process exited with code 1
```

### Exhausting the call stack

The call stack has a limited size. This puts a limit on how many times a recursive function can call itself.

```ts
function decrement(n: number) {
  if (n === 0) {
    return 0;
  }
  return decrement(n - 1);
}

// should cause a stack overflow
decrement(1_000_000);
```

```
Uncaught RangeError RangeError: Maximum call stack size exceeded
    at decrement (file:.../index.js:4:5)
    at decrement (file:.../index.js:7:12)
...
```

### Functions as object members

TS objects can contain functions. These functions can reference the object’s values via the `this` keyword.

```ts
const author = {
  firstName: "Herman",
  lastName: "Melville",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(author.getFullName()); // Herman Melville

author.firstName = "Harper";
author.lastName = "Lee";

console.log(author.getFullName()); // Harper Lee
```

### Higher-order functions

The array `sort` function takes a function as a parameter. This makes `sort` a higher-order function.

Mapping a sequence of numbers to another sequence of numbers is a common operation. The following `map` function does this, with the transformation applied being supplied as an anonymous function (squaring, in the example).

```ts
function map(values: number[], fn: (n: number) => number): number[] {
  const result = [];

  for (const v of values) {
    result(fn(v));
  }

  return result;
}

const primes = [2, 3, 5, 7, 11];
const squaredPrimes = map(primes, (n) => n * n);
console.log(squaredPrimes); // [4, 9, 25, 49, 121]
```

### Hands-on: Create a higher-order function

Create a `filter` function that takes an array of numbers, and a function that returns a Boolean (a predicate function), and returns a list of numbers that return `true` for that function.

Note that `map` and `filter` functions already exist in TS. They will be covered later.

### Generic functions

The previous `map` function only works for converting numbers to numbers. However, what if we want to convert numbers to Booleans (e.g. is this an odd number)? Or what if we want to map strings to numbers (e.g. using `parseFloat`)?

We can achieve this using generic types.

```ts
function map<T, U>(items: T[], fn: (item: T) => U): U[] {
  let result: U[] = [];

  for (let item of items) {
    result.push(fn(item));
  }

  return result;
}
```

The generic `map` function can be used to transform an array of numbers into an array of Booleans denoting whether the corresponding number was odd. This will bind `T` as a number and `U` as a function that takes a number and returns a Boolean.

```ts
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(map(numbers, (n: number) => n % 2 === 1));
```

### Closures

Closures are a powerful, but advanced, concept in TS. They allow functions to “capture” values defined in an outer context.

```ts
function createUniqueIdGenerator(): () => string {
  let id = 0;

  return function (): string {
    id += 1; // id defined in outer context
    return `id_${id}`;
  };
}

const generateId = createUniqueIdGenerator();

console.log(generateId()); // id_1
console.log(generateId()); // id_2
console.log(generateId()); // id_3
```

### TSDoc

Documenting code using comments was discussed earlier. It’s possible to use structured comments to create high quality documentation that can also be utilised by the IDE.

```ts
/**
 * Maps each element of the provided array using the given mapping function.
 *
 * @template T - The type of elements in the source array.
 * @template U - The type of elements in the returned array.
 * @param items - The source array to map over.
 * @param fn - The mapping function that converts an element of type `T` to type `U`.
 * @returns A new array where each element is the result of the mapping function applied to each element of the source array.
 *
 * @example
 * const numbers = [1, 2, 3];
 * const isOdd = map(numbers, (n) => n % 2 === 1);
 * console.log(isOdd); // [true, false, true]
 */
function map<T, U>(items: T[], fn: (item: T) => U): U[] {
  let result: U[] = [];

  for (let item of items) {
    result.push(fn(item));
  }

  return result;
}
```

VS Code will now display detailed documentation whenever you use this function in your application.

Comments in TS can be extracted to HTML documentation using [TypeDoc](https://typedoc.org). Using TSDoc comments over standard comments will improve the quality of this external documentation.   