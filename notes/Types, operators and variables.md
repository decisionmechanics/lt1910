## Types, operators and variables

TS can represent several kinds of simple value.

- numbers (whole and real)
- strings (text)
- logical (true/false)
- empty

### Numbers

Number values are numeric values. TS doesn’t formally distinguish between whole numbers and real numbers.

Examples of TS numbers are

- `5`
- `3.14`
- `0`
- `-6`
- `-6.3`
- `1e5`
- `1_000_000_000`

### Hands-on: Display numbers

Write out the numbers above. Note that `console.log` can display numeric values.

How is `1_000_000_000` displayed?

### Numeric precision

Numbers in TS are represented using 64-bits. The following constants can be displayed to get the largest numbers that can be represented.

- `Number.MIN_VALUE`
- `Number.MAX_VALUE`
- `Number.MIN_SAFE_INTEGER`
- `Number.MAX_SAFE_INTEGER`

### Hands-on: Review ranges of numbers

Display the minimum and maximum values for real numbers and integers.

### Rounding errors

The fixed precision of numbers prevents us from being able to represent all numbers perfectly. This can lead to rounding errors when performing calculations.

### Special numbers

TS represents infinite numbers using `Infinity`.

`NaN` is used to represent not a number (e.g. the result of dividing 0 by 0).

### Numeric expression operators

| Operator | Description         | Example            |
| :------- | ------------------- | ------------------ |
| `+`      | Addition            | `1 + 2 // 3`       |
| `-`      | Subtraction         | `2 - 1 // 1`       |
| `*`      | Multiplication      | `2 * 2 // 4`       |
| `/`      | Division            | `5 / 2 // 2.5`     |
| `**`     | Exponentiation      | `2 ** 3 // 8`      |
| `%`      | Modulus             | `5 % 2 // 1`       |
| `()`     | Override precedence | `(1 + 2) * 3 // 9` |
| `-`      | Negation            | `-(-1) // 1`       |

### Hands-on: Convert inches to centimetres

An inch is 2.54 centimetres. Calculate, and display, how many centimetres are in 12 inches.

### Hands-on: Numeric precision issues

Add 0.2 to 0.1 and display the result.

Add 999 to 4,153,000,000,000,000,000 and display the result.

How do you explain this?

### The `Math` namespace

The `Math` namespace supports a number of useful mathematical concepts. For example,

```ts
console.log(Math.PI);
console.log(Math.sqrt(256));
console.log(Math.round(1.7));
```

### Hands-on: Explore the `Math` namespace

Review the `Math` namespace [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

Try out some of the functions. For instance

- Generate some random numbers using `Math.random`
- Calculate the area of a circle from its radius

Note that the `Math` namespace uses radians, instead of degrees ($\degree$), when referring to angles. 1 radian is ${180/\pi}^{\circ}$.

### Strings

Strings are used to represent text. They are defined by enclosing their content in quotes. You can use single or double quotes.

The following are examples of strings

- `“Hello from LTREE!”`
- `'Four score and seven years ago…'`
- `"A"`
- `"3.14"`

Double-quoted strings allow the use of single quotes as apostrophes.

### Escaping special characters

Special characters can be represented in TS strings by escaping them with a `\`.

| Special character | Description       |
| ----------------- | ----------------- |
| `\n`              | Newline           |
| `\r`              | Carriage return   |
| `\t`              | Tab               |
| `\"`              | Double quote      |
| `\'`              | Single quote      |
| `\\`              | Backslash         |
| `\u{X...}`        | Unicode character |
| `\0`              | Null character    |

### Hands-on: Using special characters in strings

Display the following.

- Your name and e-mail address on separate lines using a single `console.log`.
- `C:\course\handson\`
- A unicorn (character code 1F984)

### Concatenating strings

Strings can be concatenated using the `+` operator.

For example

```ts
console.log("First" + " " + "Last"); // First Last
```

### Template literals

There’s a third way to define strings in TS—using backticks (`````). These are template literals.

Template literals can have expressions embedded in them and are most commonly used for string interpolation. The expressions must be wrapped in curly braces (`{}`) and prefixed with a `$` character.

For example

```ts
console.log(`12 inches is ${12 * 2.54} centimetres`); // 12 inches is 30.48 centimetres
```

String interpolation is much more convenient than string concatenation for complex templates.

Escape backticks (``\```) to display them in template literals.

### Hands-on: Formatting using template literals

Use a template literal to show a conversion from £ to $. You can obtain the latest rate at [XE.com](https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=USD).

You'll see the `toFixed` function later that will allow you to clean up the calculated values.

### String methods

There are many methods that operate on strings. Some of the more popular ones are listed in the table below.

| Property/Method | Description                                             | Example                                          |
| --------------- | ------------------------------------------------------- | ------------------------------------------------ |
| s.length        | Returns length of string                                | `"Hello".length // 6`                            |
| s.indexOf       | Returns index of the first occurrence of specified text | `"Hello".indexOf("l") // 2`                      |
| s.lastIndexOf   | Returns index of the last occurrence of specified text  | `"Hello".lastIndexOf("l") // 3`                  |
| s.includes      | Does the string include the specified text?             | `"Hello".includes("ell") // true`                |
| s.startsWith    | Does the string start with the specified text?          | `"Hello".startsWith("He") // true`               |
| s.endsWith      | Does the string end with the specified text?            | `"Hello".endsWith("lo") // true`                 |
| s.slice         | Extracts a section of a string                          | `"Hello".slice(1, 4) // ell`                     |
| s.replace       | Replaces first occurrence of text                       | `"HiHi".replace("Hi", "Hello") // HelloHi`       |
| s.replaceAll    | Replaces all occurrences of text                        | `"HiHi".replaceAll("Hi", "Hello") // HelloHello` |
| s.toLowerCase   | Converts to lower case                                  | `"Hello".toLowerCase() // hello`                 |
| s.toUpperCase   | Converts to upper case                                  | `"Hello".toUpperCase() // HELLO`                 |
| s.trim          | Removes surrounding whitespace                          | `" Hello ".trim() // hello`                      |
| s.trimStart     | Removes whitespace from start                           | `" Hello ".trimStart() // Hello_`                |
| s.trimEnd       | Removes whitespace from end                             | `" Hello ".trimStart() // _Hello`                |
| s.split         | Splits into substrings                                  | `"Hi, Jane!".split(", ") // Hi, Jane!`           |
| s.repeat        | Repeats the string n times                              | `"Hi".repeat(3) // HiHiHi`                       |

### Hands-on: Cleaning data

Transforming strings to a canonical form is a common activity in data processing. Clean the following string by removing leading/trailing whitespace, and converting it to lower case.

```ts
"  DirTY   ";
```

### Converting between strings and numbers

It’s common to need to convert values read as strings into numbers.

`parseFloat` will take a string and convert it to a numeric value.

```ts
console.log(parseFloat("12.70")); // 12.7
```

Note that `parseFloat` will discard any trailing values that aren’t valid.

```ts
console.log(parseFloat("12.7whatisthis?!!")); // 12.7
```

TS also provides `parseInt`, but its behaviour is more complex and can result in problems. Parsing as a float and then truncating the value results in the same behaviour.

Numbers can be converted to strings using

```ts
console.log((1).toString()); // 1
console.log((2).toFixed(2) // 2.00
```

String interpolation can also be used to convert numbers to strings.

### Hands-on: Convert strings to numbers

Note what happens if you add two strings containing numbers together.

```ts
console.log("1" + "1"); // 11
```

To perform addition, instead of concatenation, you must convert the strings to numbers.

Use `parseFloat` to perform the addition.

### Logicals

Logical values, also known as Boolean values, can be `true` or `false`. These are important in, for example, controlling program flow, which is covered later.

### Logical operators

| Operator | Description                 | Example                    |
| -------- | --------------------------- | -------------------------- | --- | ----- | --- | -------------- |
| `&&`     | And                         | `true && true // true`     |
| `        |                             | `                          | Or  | `true |     | false // true` |
| `!`      | Not                         | `!true // false`           |
| `===`    | Equal values (and types)    | `10 * 2 === 5 * 4 // true` |
| `!==`    | Not equal values (or types) | `"a" !== "b" // true`      |
| `>`      | Greater than                | `1 > 2 // false`           |
| `<`      | Less than                   | `1 < 2 // true`            |
| `>=`     | Greater than or equal to    | `1 >= 2 // false`          |
| `<=`     | Less than or equal to       | `1 <= 2 // true`           |
| `? :`    | Conditional/Ternary         | `false ? 1 : 2 // 2;`      |

Logical values can be combined, for example

```ts
console.log(1 <= 2 && 2 <= 3); // true
```

There is one value in TS that is not equal to itself.

```ts
console.log(NaN === NaN); // false
```

One nonsensical computation does not equal another.

The conditional operator takes the form

```ts
a ? b : c;
```

If `a` is true, then the value of the expression is `b`. Otherwise, it’s `c`.

### Hands-on: Generate truth tables

A logical operator’s [truth table](https://en.wikipedia.org/wiki/Truth_table) is a table that lays out its value for all possible combinations of its operands.

For example, the first row of the `&&` truth table might be

|  a  |  b  | x = a && b |
| :-: | :-: | :--------: |
|  F  |  F  |     F      |

Generate complete truth tables for the `&&`, `||` and `!` operators using the operators and template literals. For example, you might start the `&&` table using

```ts
console.log("a b x");
console.log("-----");
console.log(`F F ${false && false ? "T" : "F"}`);
```

### Lazy operators

`&&` and `||` are lazy operators—they will only evaluate the value on the right if it’s necessary, given the value on the left.

### Truthy and falsy values

Some values will be evaluated as `true` or `false` if used in a context where a logical value would usually be expected.

The following values are falsy in TS.

- `false`
- `0`
- `“”`, `‘’` and ``````
- `NaN`
- `null`
- `undefined`

`null` and `undefined` are “empty” values.

All other values are truthy.

Logical operators operate on truthy and falsy values.

```ts
const empty = "";
const greeting = "Hi";
console.log(empty || greeting); // Hi
console.log(empty && greeting); // <empty>

const x = 0;
const y = 999;
console.log(x || y); // 999
console.log(x && y); // 0
```

### Empty values

`null` and `undefined` represent the absence of a value. `undefined` represents a value that has yet to be set. `null` represents the _intentional_ absence of a value.

In practice, the semantic differences between these two values are usually blurry.

The nullish coalescing operator (`??`) returns the operand on the right when the operand on the left is `null` or `undefined`.

### Hands-on: nullish coalescing operator

Try to guess the output of the following statements, before you run them.

```ts
console.log(null ?? 1);
console.log(1 ?? 2);
```

### Expressions and statements

Expressions are combinations of values and operators. For example

```ts
Math.sqrt(1 + 2) * 3;
```

Statements are individuals lines in the program. They may include expressions. We’ve already written a number of statements. Each of our `console.log` lines is a statement. Statements are delineated by semicolons (`;`).

They can also be delineated by newlines, but semicolons are considered a best practice.

### Variables

Variables are bound to values. They allow us to attach a label to the result of an expression, for example.

Binding a value to a variable is done using the `=` operator. For example,

```ts
const author = "Jane Austen";
console.log(author);
```

The `const` keyword denotes that the variable cannot be rebound to another value. The following would be an error.

```ts
const author = "Jane Austen";
console.log(author);
author = "Charlotte Bronte"; // Error
console.log(author);
```

A `let` binding can be used if the binding needs to be changed after the initial assignment.

```ts
let author = "Jane Austen";
console.log(author);
author = "Charlotte Bronte";
console.log(author);
```

### Hands-on: Type inference

Assign some values to variables using `let` bindings.

Hover over the variable name in VS Code. Note that the type of the variable is displayed. The type was inferred from the initial assignment. Type inference is an important benefit when using TS over JS.

### Explicit types

You can create a variable with a `let` binding without assigning an initial value to it. The initial value will be `undefined`.

The compiler won’t be able to infer a type as no value has been given. In this case, a type should be specified.

```ts
let author: string;
```

### Shortcut assignment operators

Arithmetic assignment operators update the value of an existing variable. They are shortcuts for a more verbose syntax.

```ts
let x = 1;
x = x + 2; // x === 3
x += 3; // x === 6;
x *= 4; // x === 24;
console.log(x); // 24
```

The available arithmetic shortcut assignment operators are

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`
- `**=`

There are other (e.g. logical) shortcut assignment operators.

- `&&=`
- `||=`
- `??=`

Shortcut assignment operators only work with `let` bound variables.

### `const` vs `let`

It’s usually the case that a value only needs to be assigned once, so `const` bindings are common in TS. `const` tends to be the default, and `let` is used when the logic of the application requires that the value be updated.

Reusing a variable throughout the application can make the code more difficult to read.

Prior to ES2015, variables were defined using `var` bindings. This has some confusing properties so has been all but deprecated in modern code. You may see it generated by the TS compiler.

### Variable naming conventions

> There are only two hard things in computer science: cache invalidation and naming things—Phil Karlton

Variables in TS are using formatted as camel case. For example

```ts
const authorName = "Jane Austen";
const numberOfNovels = 6;
const yearOfBirth = 1775;
```

Other formats are legal, so camel case is a convention—not a rule.

Variable names should also make it clear what the variable denotes.

These are examples of best practices. Conventions are often documented in an organisation’s style guide. This course adheres to best practices throughout—although there are several competing “best” practices.

### Hands-on: Convert inches to centimetres using variables

- Create a `const` binding called `inches` and assign a number to it
- Create a `const` binding called `centimetres` and assign it the result of an expression that calculates the number of centimetres from the number of inches
- Create a template literal that describes the conversion and includes the values of both `inches` and `centimetres`

### Displaying values

We’ve been writing values to the console (screen) throughout. `console.log` takes zero or more values and writes them out.

```ts
const authorName = "Jane Austen";
console.log(); // newline
console.log(1, "Hi", authorName, true, null);
```

### Dates

Dates are not simple types in TS, but they are built-in objects so are common.

In all programming languages, dates tend to be problematic, due to timezone and daylight savings challenges.

### Creating dates

To create a date with the current date/time use

```ts
const now = new Date();
console.log(now);
```

You can also create a specific date in the past or future.

```ts
const theNewMillennium = new Date("2000-01-01");
console.log(theNewMillennium);
const theSingularity = new Date("2045-01-01");
console.log(theSingularity);
```

### Formatting dates

To output a date in a format that is compatible with your current region (e.g. UK, US), use

```ts
const now = new Date();
console.log(now.toLocaleString());
```

Outputting in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format is also popular as it provides a common representation across all regions.

```ts
const now = new Date();
console.log(now.toISOString());
```

### Calculating differences between dates

```ts
const now = new Date();
const theSingularity = new Date("2045-01-01");
const millisecondsLeft = theSingularity.getTime() - now.getTime();
const daysLeft = millisecondsLeft / 1000 / 60 / 60 / 24;
console.log(`we have ${Math.round(daysLeft)} days remaining`);
```

### Extracting date components

```ts
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTimezoneOffset()); // minutes
```
