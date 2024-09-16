## Asynchronous programming

### Synchronous programming model

When we reason about programs, we usually think about the computer executing the statements one at a time—waiting for one to finish before executing the next one.

This is a synchronous programming model. It has the major benefit that it’s easy to understand.

However, there are certain things a computer has to do (e.g. read data from a network) that are _incredibly_ slow, judged by the standard of how fast a computer can execute instructions. In a synchronous programming model, our application has to sit and wait when it could be getting on with other tasks.

### Asynchronous programming model

In asynchronous programming, the application doesn’t sit around waiting for lengthy operations to complete. It gets on with other work and returns to the task when there’s something to do.

Think about washing clothes. You fill the machine, switch it on and then get on with non-laundry-related activities. When the washing machine beeps, you return to it and unload it. This is asynchronous behaviour. You don’t sit and watch the machine until it finishes.

TS makes lengthy operations (e.g. those involving I/O) asynchronous. Other programming languages rely on threads to do this, and threading is notoriously complicated, so TS is great when you have applications that benefit from using an asynchronous model.

The types of operations that are likely to be asynchronous are

- interacting with the file system
- interacting with the operating system
- making requests to networks
- querying data stores
- reading user input

### Callbacks

Callbacks are one way to support asynchronous operations. The operation is initiated and a function is supplied that will be called when the operation has completed.

We’ve already seen this model when creating ASCII art using the figlet package. It takes time to build the ASCII art, so figlet lets the application get on with other things in the meantime.

```ts
import figlet from "figlet";

figlet("Hello from LTREE!", (err, data) => {
  if (err) {
    console.log(err.message);

    return;
  }

  console.log(data);
});

console.log("the end...or is it...?");
```

This code outputs

```
the end...or is it...?
  _   _      _ _         _____ ____  _____ _
 | | | | ___| | | ___   | ____|  _ \|  ___| |
 | |_| |/ _ \ | |/ _ \  |  _| | | | | |_  | |
 |  _  |  __/ | | (_) | | |___| |_| |  _| |_|
 |_| |_|\___|_|_|\___/  |_____|____/|_|   (_)
```

The call to `figlet` didn’t block, so the next (last) statement ran immediately. Then, when the ASCII art had been generated, the callback function was executed to display the data.

### “Callback hell”

Callbacks are easy to work with, but they don’t scale very well. It’s easy to end up in [“callback hell”](http://callbackhell.com).

```ts
fn1(a, (b) => {
  fn2(b, (c) => {
    fn3(c, (d) => {
      fn4(d, (e) => {
      }
    });
  });
});
```

Code like this is very difficult to read.

### Promises

TS promises streamline asynchronous coding, making it more readable and manageable. Promises are objects that can be in one of three states: pending, fulfilled or rejected. Promises provide a way to handle asynchronous results without deep callback nesting, using `then` for fulfilled tasks and `catch` for errors.

Inquirer.js is a popular package for prompting the user for information in command-line applications. It makes use of promises to read user input.

```ts
import inquirer from "inquirer";

const prompts = [
  {
    name: "name",
    message: "What is your name?",
  },
  {
    name: "email",
    message: "What is your e-mail address?",
  },
];

inquirer
  .prompt(prompts)
  .then(({ name, email }) => {
    console.log(`Thanks, ${name}. I will contact you at ${email}.`);
  })
  .catch((err) => {
    if (err.isTtyError) {
      console.error("prompt can't be rendered in the current environment");
    } else {
      console.error(err);
    }
  });

// ? What is your name? Jane
// ? What is your e-mail address? Jane.Doe@example.com
// Thanks, Jane. I will contact you at Jane.Doe@example.com.
```

### async/await

While chained promises are easier to read than nested callbacks, they still take you out of the flow when reading code.

The `async` and `await` keywords allow the use of asynchronous programming while writing code that _looks_ synchronous. They are “syntactic sugar” on top of promises, so can be mixed and matched with code/libraries that use promises.

`async` is used to mark a function as containing `await` calls (so itself needing to be awaited). `await` is used to wait for a call to an `async` function to complete.

We previously read files synchronously using `readFileSync`. However, we now know that there are benefits to using an asynchronous model. In general, the preferred approach is to read files asynchronously.

```ts
import { readFile } from "node:fs/promises";

try {
  const text = await readFile("./dracula.txt", "utf-8");
  const words = text.split(/\s+/); // split on whitespace
  const wordCount = words.length;
  console.log(`there are around ${wordCount} words in Dracula`);
} catch (err) {
  console.error(err);
}

// there are around 161436 words in Dracula
```

### Accessing web services

Fetching data from remote web services is a very common asynchronous operation. Node has a built-in fetch API that supports this. The [axios](https://axios-http.com) library is a very popular third-party alternative to fetch.

There’s an API that returns inspirational quotes available at

```
https://inspirational-quotes.azurewebsites.net/api/InspirationalQuotes
```

To fetch a quote using TS, we’ll use the fetch API.

```ts
try {
  const response = await fetch(
    "https://inspirational-quotes.azurewebsites.net/api/InspirationalQuotes"
  );

  if (!response.ok) {
    throw new Error(`http error: ${response.status}`);
  }

  const quote = await response.json();
  console.log(quote.text);
} catch (err) {
  console.error(err);
}
```

### Hands-on: Using Open Library

The Open Library provides a Web API for querying book details. The format is

```
https://openlibrary.org/isbn/<ISBN>.json
```

Here’s the URL for an edition of War of the Worlds.

```
https://openlibrary.org/isbn/9780241382707.json
```

The JSON document for this book is

```json
{
  "works": [
    {
      "key": "/works/OL27694216W"
    }
  ],
  "title": "The War of the Worlds",
  "publishers": ["Penguin"],
  "publish_date": "2018-12-06",
  "key": "/books/OL49242248M",
  "type": {
    "key": "/type/edition"
  },
  "identifiers": {},
  "covers": [14409881],
  "isbn_13": ["9780241382707"],
  "classifications": {},
  "physical_dimensions": "20.4 x 13.8 x 2.5 centimeters",
  "weight": "354 grams",
  "number_of_pages": 240,
  "latest_revision": 3,
  "revision": 3,
  "created": {
    "type": "/type/datetime",
    "value": "2023-08-16T07:08:26.501836"
  },
  "last_modified": {
    "type": "/type/datetime",
    "value": "2023-08-16T07:09:21.686090"
  }
}
```

Create an application that takes an ISBN from the command line, queries the Open Library API to retrieve the book details and then displays the title and page count.
