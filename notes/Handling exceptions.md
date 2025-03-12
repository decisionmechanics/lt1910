## Handling exceptions

### Exceptional circumstances

No matter how carefully you craft your code, errors will occur. Maybe your network connection will go down in the middle of a data transfer. Maybe the disk will fill up, or fail. There’s little your code can do to predict such eventualities.

Sometimes an error _could_ have been predicted (e.g. invalid array access), but the logic in the application didn’t trap it.

Errors in TS applications result in exceptions. If exceptions aren’t handled, they crash the application, producing an ugly (if helpful) message and a stack trace. Not a great user experience.

### Exceptions are bad

It’s best not to have exceptions at all. They are inefficient and difficult to debug. If it’s possible for your code to see a potential exception, and head it off, you should do so. Exceptions should only be raised in truly exceptional circumstances.

This is predictable.

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

// TypeError - Cannot read property "title" of undefined
console.log(books[3].title);
```

Just use

```ts
if (books.length >= 4) {
  console.log(books[3].title);
}
```

However, so we have _predictable_ errors in our examples, we will use exception handling for these avoidable exceptions.

### try…catch

The try…catch construct lets us handle our exceptions.

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

try {
  console.log(books[3].title);
} catch (err) {
  console.error("oops...");
}
```

`console.error` outputs to stderr.

### Handling errors based on their type

There may be multiple reasons why an exception occurred. If we need to handle them differently, we can check the error type.

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

try {
  console.log(books[3].title);
} catch (err) {
  if (err instanceof TypeError) {
    console.error("oops...a type error occurred");
  } else {
    console.error("oops...");
  }
}
```

### Centralised error handling

Unhandled errors bubble up the call stack until they are handled.

```ts
interface IBook {
  title: string;
  author: string;
}

const books: IBook[] = [
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

function getBook(books: IBook[], index: number): IBook {
  return books[index];
}

try {
  const book = getBook(books, 3);
  console.log(book.title);
} catch (err) {
  if (err instanceof TypeError) {
    console.error("oops...a type error occurred");
  } else {
    console.error("oops...");
  }
}
```

### Re-throwing exceptions

It’s possible to handle the exception higher in the call stack and then forward it on for subsequent handling.

```ts
interface IBook {
  title: string;
  author: string;
}

const books: IBook[] = [
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

function getBookTitle(books: IBook[], index: number): string {
  try {
    return books[index].title;
  } catch (err) {
    console.error("this book can't be found");

    throw err; // forward on
  }
}

try {
  const bookTitle = getBookTitle(books, 3);
  console.log(bookTitle);
} catch (err) {
  if (err instanceof TypeError) {
    console.error("oops...a type error occurred");
  } else {
    console.error("oops...");
  }
}
```

### Explicitly throwing exceptions

Exceptions can be thrown directly by your own code.

```ts
function divideBy(numerator: number, denominator: number): number {
  if (denominator === 0) {
    throw new Error("cannot divide by zero");
  }

  return numerator / denominator;
}

try {
  console.log(divideBy(1, 2));
  console.log(divideBy(1, 0));
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  }
}
```

### try…catch…finally

Sometimes you need to clean up regardless of whether an exception occurred or not. We can do this by adding a `finally` block to our try…catch construct.

```ts
function divideBy(numerator: number, denominator: number): number {
  if (denominator === 0) {
    throw new Error("cannot divide by zero");
  }

  return numerator / denominator;
}

try {
  console.log(divideBy(1, 2));
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
} finally {
  console.log("done");
}

try {
  console.log(divideBy(1, 0));
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  }
} finally {
  console.log("done");
}
```

### Working with files

I/O is a common source of exceptions.

We can use the standard Node [fs module](https://nodejs.org/api/fs.html#file-system) to read from, and write to, files. It contains `readFileSync` and `writeFileSync` methods.

```ts
import { readFileSync, writeFileSync } from "node:fs";

try {
  const text = readFileSync("./dracula.txt", "utf-8");
  const words = text.split(/\s+/); // split on whitespace
  const wordCount = words.length;

  writeFileSync(
    "./wordCount.txt",
    `there are around ${wordCount} words in Dracula`
  );
} catch (err) {
  console.error(err);
}

// there are around 161436 words in Dracula
```

We will return to file handling when we discuss asynchronous programming.

### Hands-on: grep

Write a simple [grep](https://en.wikipedia.org/wiki/Grep) utility.

- Read two arguments from the command line—some search text and a file path
- Read the file in as a string
- Split the string on new lines
- For each line, check if the search text is contained in the line
- Display lines that contain the search string

Remember to **handle exceptions**. They are common when working with files.

Try it out on a text file, such as one of the TypeScript files you've created.

Try reading from a file path that doesn’t exist. Was the exception trapped?
