## Control flow

Control flow refers to the sequence in which statements are executed in a computer program.

The control flow in previous modules has been very simple—sequences of statements that run one after another. This is very limiting. In a real-world application, control flow is much more complex. There are branches, loops, jumps, returns, etc.

In this module, control flow is expanded to include

- conditional flow
- loops

### Conditional execution

Programs need to make decisions. For example, if a file doesn’t exist, the program needs to perform a different action (e.g. alert the user) than if it does exist (e.g. read the contents). This logic has the form “if (condition is met) doX else doY”.

Sometimes we only want to perform an operation under some condition, and do nothing if that condition isn’t met. This logic has the form “if (condition is met) doX”.

### if statements

if statements perform a check using a Boolean expression. If the expression is truthy, they execute their “guarded” statements—known as the body.

```ts
const s = "";

if (s === "") {
  console.log("the string is empty");
}
```

When the body consists of a single line, a simpler form can be used.

```ts
if (s === "") console.log("the string is empty");
```

When there are multiple statements protected by the condition, they are all contained in the block.

```ts
const s = "";

if (s === "") {
  console.log("the string is empty");
  console.log("was this a mistake?");
}
```

### if…else statements

if statements only execute statements if their conditions are true. if…else statements execute different branches of code depending on the value of the condition.

```ts
const number = 1;

if (number % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}
```

Again, if the body consists of a single statement, a simpler form can be used.

```ts
const number = 1;

if (number % 2 === 0) console.log("number is even");
else console.log("number is odd");
```

In this case, using the ternary operator would probably have been better.

```ts
const number = 1;
console.log(`number is ${number % 2 === 0 ? "even" : "odd"}`);
```

It’s also possible to have chained if…else statements. The first one to match determines the block that is executed.

```ts
const age = 25;

if (age <= 5) {
  console.log("preschool");
} else if (age <= 11) {
  console.log("primary");
} else if (age <= 18) {
  console.log("secondary");
} else if (age <= 21) {
  console.log("university");
} else {
  console.log("work/post-grad");
}
```

### Hands-on: Using if…else

Set a `temperature` variable and use it to display if water would be solid, liquid or gaseous at that temperature.

### Code blocks and scope

Generally, if and if…else statements make decisions about executing code blocks. These are statements contained in curly braces (`{}`).

Blocks also allow us to control the scope of variables. If a variable is defined within a block, its lifetime is limited to that block.

```ts
{
  const author = "Bram Stoker";

  // ok
  console.log(author);
} // author goes out of scope

// compiler error, as author is not defined
console.log(author);
```

Blocks can also be nested. In this case, the variable is also available in any child blocks.

```ts
{
  const author = "Bram Stoker";

  // ok
  console.log(author);

  {
    // ok
    console.log(author);
  }
} // author goes out of scope

// compiler error, as author is not defined
console.log(author);
```

### Code indentation

Note that indentation is used to make the block structure clear. This isn’t required to be valid TS, but it’s a universal convention. A modern IDE will even suggest indentation as a block is started.

The number of spaces to indent by will be part of your organisational style guide. In the examples, the indentation level is two spaces.

### switch statements

if…else statements are very flexible, but they can be difficult to read if there are many conditions to check. It’s common to be checking the same variable in each condition. In that situation, switch statements tend to be clearer.

The switch statement takes a variable and performs several checks on the value of that variable.

```ts
const status = "employee";

switch (status) {
  case "toddler":
    console.log("goes to preschool");
    break; // required to prevent "fall through"
  case "pupil":
    console.log("goes to school");
    break;
  case "student":
    console.log("goes to university");
    break;
  case "employee": // first match executes
    console.log("goes to work");
    break;
  default:
    console.log("goes wherever");
    break; // not essential
}
```

### Hands-on: Using switch statements

Write a switch statement to categorise a non-negative whole number into the only groups developers care about—zero, one or many.

Remove the `break` statements to see what happens.

### Loops

Loops allow code to be repeated. Without loops, programs would quickly run out of statements to execute.

There are two major types of loops.

- for loops
- while loops

Both have subcategories.

### Standard for loop

In a standard for loop, we manually manage the value of an integer value. There are three components to this.

1. Defining and initialising the loop variable
2. Checking whether the loop has terminated
3. Updating the value of the loop variable

Here’s a loop that displays the values 1 through 10.

```ts
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

The following loop sums those numbers.

```ts
let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log(`the sum of the numbers 1-10 is ${total}`); // 55
```

### Hands-on: FizzBuzz

FizzBuzz is a coding challenge used in interviews.

Write code to display all the numbers from 1 to 100, with three exceptions.

- For numbers divisible by three, and not five, display “Fizz” instead of the number
- For numbers divisible by five, and not three, display “Buzz” instead of the number
- For numbers that are divisible by three _and_ five, display “FizzBuzz” instead of the number

### Looping backwards

The standard for loop syntax provides a lot of flexibility in how the loop variable is manipulated. It’s easy to loop backwards.

```ts
for (let countdown = 10; countdown > 0; countdown--) {
  console.log(`${countdown}...`);
}

console.log("We are go.");
```

### Skipping values

We can also increment the loop variable to skip values.

```ts
for (let oddNumber = 1; oddNumber <= 10; oddNumber += 2) {
  console.log(oddNumber);
}
```

### Looping over one statement

If the loop body contains a single statement, there’s a simplified syntax.

```ts
for (let i = 1; i <= 10; i++) console.log(i);
```

### Early termination

We can terminate early from a loop using the `break` statement. This will immediately exit the innermost loop in which the `break` occurred.

```ts
let total = 0;

for (let i = 1; i <= 1_000_000_000; i++) {
  if (i > 10) {
    break;
  }

  total += i;
}

console.log(total); // 55
```

The _current iteration_ can be terminated with the `continue` statement. This causes the loop to immediately start processing the next number in its sequence.

```ts
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i); // display odd numbers between 1 and 10
}
```

### Hands-on: Check if a number is prime

Write code to check if a number is prime. Is 7979 a prime number?

Hint: Checking if a number is prime involves checking whether it is perfectly divisible by any number smaller than it.

### for…of loop

Standard for loops are very flexible, but they involve a lot of boilerplate. There’s also the ever-present danger of committing an “off-by-one” error where you fail to process the first or last value in the sequence.

When we are working with collections of values, we can use a for…of loop to process every value in the collection.

```ts
const primes = [2, 3, 5, 7, 11];

for (const primes of primes) {
  console.log(prime);
}
```

As with standard for loops, for…of loops support early termination via `break` and `continue`.

### Processing an array in reverse

To process the array in reverse, simply reverse the array before iterating over it.

```ts
const primes = [2, 3, 5, 7, 11];

for (const prime of primes.reverse()) {
  console.log(prime);
}
```

### Hands-on: Sum primes

Here’s an array of the first 10 primes.

```ts
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
```

Sum them using a for…of loop. The result should be 129.

### Processing a map using for…of

When processing a map using for..of, each iteration of the loop returns a key-value pair as an array of length 2. We can use destructuring to extract the key and the value as separate values.

Destructuring involves matching a pattern containing variables to a pattern containing values. The values are then bound to the variables based on their corresponding location in the pattern.

```ts
const capitals = new Map<string, string>([
  ["England", "London"],
  ["France", "Paris"],
  ["Germany", "Berlin"],
  ["Spain", "Madrid"],
]);

for (const [country, capital] of capitals) {
  // Destructuring
  console.log(`The capital of ${country} is ${capital}`);
}
```

### while loops

for loops are preferred when we know, or can easily calculate, how many times around the loop we want to iterate. When this isn’t possible, we can use a while loop.

```ts
let random = 0;

while (random !== 5) {
  random = Math.floor(Math.random() * 10 + 1);

  console.log(random);
}
```

As with for loops, while loops support early termination via `break` and `continue`.

### Hands-on: Snake eyes

Calculate the average number of rolls you have to do to get “snake eyes” (one pip on the face of each of two dice). Average over 100 “snake eyes”.

You will need two loops.

- An outer loop, which is a standard for loop with 100 iterations
- An inner while loop, which continues until you hit “snake eyes”

### do…while loops

while loops are appropriate if you want to run the loop zero or more times.

If the loop should be run _at least_ once, a do..while loop should be used.

```ts
let random: number;

do {
  // Always entered at least once

  random = Math.floor(Math.random() * 10 + 1);

  console.log(random);
} while (random !== 5);
```
