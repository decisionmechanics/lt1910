## Running in the browser (optional)

The examples in this course have used Node--server side TS. Node is a very popular environment for server apps.

However, TS is also a very popular language for creating web applications. This programme covers React—the most popular web development library—and that is the “sanctioned” approach to developing web applications.

We’ll briefly show how to run TS code in the browser—without React. This is just to reinforce the point that TS isn’t only about Node.

### Create a web page

A web page is need to host our code.

```html
<!DOCTYPE html>
<!-- index.html -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation with TypeScript</title>
  </head>
  <body>
    <button id="click-me-button">Click me!</button>
    <p id="message"></p>
    <script src="dist/app.js"></script>
  </body>
</html> 
```

This creates a button and an empty paragraph. It loads a (yet to be created) script in app.js.

### Waiting for the DOM to initialise

It’s important that the DOM isn’t manipulated until the HTML is completely loaded. Listening for the  `DOMContentLoaded` event will tell us when the DOM has fully loaded.

```ts
// app.ts

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content loaded");
});
```

### Hooking into the button click event

Once the DOM has loaded, the script can find the button element, via its `id`, and listen for it being clicked.

```ts
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById(
    "click-me-button"
  ) as HTMLButtonElement;

  button.addEventListener("click", () => {
    console.log("button clicked");
  });
});
```

### Responding to clicks

When the button is clicked, a counter will be incremented and its value displayed.

The counter is set to zero as soon as the script is loaded. This doesn’t have to wait until the DOM has loaded as it’s not manipulating elements.

```ts
// app.ts

let clickCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById(
    "click-me-button"
  ) as HTMLButtonElement;

  button.addEventListener("click", () => {
    clickCount += 1;

    const clickCountParagraph = document.getElementById(
      "message"
    ) as HTMLParagraphElement;

    clickCountParagraph.innerText = `Button was clicked ${clickCount} time(s).`;
  });
});
```

### Compiling the TypeScript

As the browser can only run JS, we have to compile the TS.

```bash
tsc --outDir dist app.ts
```

This produces the `dist/app.js` script that is loaded by the web page. 

The page can now be opened and the button clicked.

### Hands-on: Create a dice rolling application

Create a web application, with a single “Roll ‘em” button, that rolls two dice and displays the result.