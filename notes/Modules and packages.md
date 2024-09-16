## Modules and packages

### Modules

Functions are the lowest level of code organisation. Modules allow us to group related functions, and other associated data.

New modules are created in separate files, so the filesystem provides organisation. The module contains TS code. This code is private to the module, providing encapsulation. Items must be explicitly exported to allow them to be accessed from outside the module.

### CommonJS and ECMAScript modules

There are various, competing systems for creating and consuming modules. Historically, Node used the CommonJS approach. In 2015, the JS standard introduced its own module system—ES modules.

ES modules have become the preferred method of working with modules and this course focuses on that system.

### Creating modules

To create modules we create a new TS file and add code. Anything we want to make available outside the module we mark with the `export` keyword.

```ts
// conversion.ts

const KILOMETRES_PER_MILE = 1.6;

export function milesToKilometres(miles: number): number {
  return miles * KILOMETRES_PER_MILE;
}

export function kilometresToMiles(kilometres: number): number {
  return kilometres / KILOMETRES_PER_MILE;
}
```

Both `milesToKilometres` and `kilometresToMiles` can be referenced from outside the module. `KILOMETRES_PER_MILE` is private to the module.

### Consuming modules

To use the functions in the conversion module, we need to import them.

```ts
// app.ts

import { milesToKilometres, kilometresToMiles } from "./conversion";

console.log(`10 miles is ${milesToKilometres(10)} km`);
console.log(`10 km is ${kilometresToMiles(10)} miles`);
```

The `./conversion` in the import statement is the file path. If an extension is supplied, it should be `.js`.

### Wildcard imports

We can import _everything_ exported by the module.

```ts
// app.ts

import * as conversion from "./conversion";

console.log(`10 miles is ${conversion.milesToKilometres(10)} km`);
console.log(`10 km is ${conversion.kilometresToMiles(10)} miles`);
```

### Default exports

Default exports allow functions (for example) to be exported as the default item in the module.

```ts
// prime.ts

function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export default isPrime;
```

This changes how it needs to be imported in the consuming module.

```ts
// app.ts

import checkIfPrime from "./prime";

console.log(checkIfPrime(2)); // true
console.log(checkIfPrime(9)); // false
console.log(checkIfPrime(11)); // true
console.log(checkIfPrime(12)); // false
```

Default and individual exports can be combined.

```ts
// prime.ts

function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export function getNthPrime(n: number): number | undefined {
  if (n < 1) {
    return undefined;
  }

  let count = 0;

  let i = 1;

  while (count < n) {
    i++;

    if (isPrime(i)) {
      count++;
    }
  }

  return i;
}

export default isPrime;
```

```ts
// app.ts

import isPrime, { getNthPrime } from "./prime";

console.log(isPrime(11)); // true
console.log(getNthPrime(5)); // 11
```

### Hands-on: Creating and consuming modules

Create a module with a function called `throwDice` that takes the number of dice to be thrown and returns the total pips shown for the roll.

Call this function from an external module and display the results of 10 rolls of two dice.

### Packages

Packages provide a mechanism for distributing code. They contain one or more modules. Packages can be distributed using a variety of means. For example, they can be distributed as compressed archives.

The most common package distribution approach is via a package repository, such as [npm](https://www.npmjs.com).

_Creating_ packages is outside the scope of this course, but we will cover installing and using packages from npm.

### Installing packages

To install a package into your application, ensure you are in the root of your application folder and type the following.

```bash
npm install <package-name>
```

For example, to install the popular Express web application framework, you would enter

```bash
npm install express
```

This creates several files and folders in the root of your application.

- `node_modules`: a folder that contains the code of any libraries you’ve installed
- `package.json`: a file that contains the details of the installed packages
- `package-lock.json`: a file that contains the details of the _exact_ package versions that you have installed

If you obtain a `package.json` file from elsewhere (e.g. via your source code repository) you can call `npm install` to download and install any third-party libraries required by the application. This is usually the first thing you do when you start working on an existing application.

### Hands-on: Enable ES module loading

Add `type: "module"` to package.json to enable ES module loading.

```json
{
  "devDependencies": {},
  "dependencies": {},
  "type": "module"
}
```

This is needed to allow some packages to be imported using ES module syntax.

### Installing packages globally

By default, packages are installed local to the application. They don’t impact other applications on your system. You can use the `--global` option to install packages globally. This should be used sparingly, and only for packages that should be identical across all libraries (e.g. tooling packages).

```bash
npm install --global ts-node
```

### Uninstalling packages

To uninstall packages, use

```bash
npm uninstall express
npm uninstall --global ts-node
```

### Listing installed packages

You can browse `package.json` to see which packages are used in the application.

To list _installed_ packages

```bash
npm list --depth=0
```

To list globally installed packages

```bash
npm list --global --depth=0
```

### Updating packages

Packages should be kept up to date to maintain security.

To view outdated packages

```bash
npm outdated [--global]
```

To update packages

```bash
npm update [--global]
```

### Development dependencies

Most packages are required when you deploy the application. However, some packages, such as `typescript`, are only needed during the development phase. Remember that TS compiles to JS and it’s the JS that is deployed.

We can mark these packages as development dependencies when we install them.

```bash
npm install --save-dev typescript
```

Development dependencies are not installed in a production context.

### Hands-on: Produce ASCII art

The [figlet](https://github.com/patorjk/figlet.js) package creates graffiti-style ASCII art from text. As it’s a third-party package, it needs to be installed from the npm repository.

Ensure that you are in your application’s root folder and enter

```bash
npm install figlet
```

You should now have a `node_modules` folder and a `package.json` file. Have a look at both and you should see entries for figlet.

Create an app.ts file with the following code.

```ts
import figlet from "figlet";

figlet("Hello from LTREE!", (err, data) => {
  if (err) {
    console.log(err.message);

    return;
  }

  console.log(data);
});
```

This imports the `figlet` function from the package and uses it to convert “Hello from LTREE!” to ASCII art. It uses an anonymous callback function to receive the artwork (and any error that may occur).

Run the code and marvel at the ASCII art.

### Security implications

When you install a third-party package you are downloading, installing and executing unknown code produced by a stranger. The only security in place is trust. You must be careful about the choice of packages you decide to use.

Unfortunately, there’s no perfect solution to this problem. Sticking to well-known packages is safer, but even those can be, [and have been](https://www.bleepingcomputer.com/news/security/popular-coa-npm-library-hijacked-to-steal-user-passwords/), compromised.
