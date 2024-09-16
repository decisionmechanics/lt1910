## Working with collections

### Collection types

TS has a number of basic types that allow simple values to be stored (e.g. number, string).

Collection types allow us to combine these basic types to create sophisticated data structures capable of holding large amounts of related data.

There are four collection types in TS.

- arrays
- sets
- maps
- objects

Objects will be covered later in the course.

### Arrays

Arrays allow us to store sequences of values.

```ts
const firstFivePrimes = [2, 3, 5, 7, 11];
const authors = ["Jane Austen", "Charlotte Bronte"];
```

It’s possible to have different data types as array elements, but this is uncommon and can lead to confusion.

### Hands-on: Create arrays

Create an array containing your top five movies.

Hover over your variable name. What is the type of the array? It should be `string[]`.

### Accessing array elements

Individual array elements can be accessed with square brackets containing the position of the element in the array. Indexing starts at 0.

```ts
const firstFivePrimes = [2, 3, 5, 7, 11];
console.log(firstFivePrimes[0]); // 2
console.log(firstFivePrimes[4]); // 5
```

### Getting the length of the array

The length of the array can be obtained from the `length` property.

```ts
const firstFivePrimes = [2, 3, 5, 7, 11];
console.log(firstFivePrimes.length); // 5
```

### Checking if an item is in an array

The `includes` method can be used to check if an array contains an item.

```ts
const numbers = [1, 3, 5, 7, 9];
console.log(numbers.include(5)); // true
```

### Hands-on: Invalid array indexing

What happens when you attempt to access an element beyond the length of the array? Try it.

### Modifying array elements

Array elements can be updated by assigning a new value to them.

```ts
const firstFivePrimes = [2, 3, 5, 7, 11];
firstFivePrimes[0] = 1;
console.log(firstFivePrimes); // [1, 3, 5, 7, 11]
```

### Hands-on: Update array elements

Fix the following array by updating the incorrect elements.

```ts
const firstFivePrimes = [1, 3, 5, 7, 9];
```

### Extending arrays

Elements can be added to the end of arrays using the `push` method.

```ts
const primes = [2, 3, 5, 7, 11];
primes.push(13);
console.log(primes); // [2, 3, 5, 7, 11, 13]
```

To add elements to the _start_ of the array, use `unshift`.

```ts
const primes = [3, 5, 7, 11, 13];
primes.unshift(2);
console.log(primes); // [2, 3, 5, 7, 11, 13]
```

### Empty arrays

When defining an empty array, TS can’t infer the type of the elements, so an explicit type should be provided.

```ts
const primes: number[] = [];
```

### Hands-on: Build up an array

Starting with an empty numeric array, `push` items onto it to create an array of the first five square numbers (beginning with 1).

### Splicing arrays

`splice` is a versatile method for adding, removing and replacing elements of an array.

It can add items at any location.

```ts
const primes = [2, 3, 5, 13, 17];
primes.splice(3, 0, 7, 11);
console.log(primes); // [2, 3, 5, 7, 11, 13, 17]
```

`3` is the index to start adding items at. `0` is the number of items to be removed (we are only adding). `7` and `11` are the items to be added.

It can be used to delete items.

```ts
const primes = [2, 3, 5, 7, 9, 11];
primes.splice(4, 1);
console.log(primes); // [2, 3, 5, 7, 11]
```

`4` is the position to start deleting at and `1` is the number of items to be deleted.

We can combine deletion and addition.

```ts
const primes = [2, 3, 5, 7, 9, 17];
primes.splice(4, 1, 11, 13);
console.log(primes); // [2, 3, 5, 7, 11, 13, 17]
```

### Hands-on: Modifying arrays using `splice`

Start with the following array.

```ts
[1, 2, 3, 100, 7, 8, 9, 10];
```

Transform it to an array of the numbers 1 through 10 using a single `splice` call.

### Removing items from arrays

While `splice` is a powerful method for adding and deleting values from arrays, when we are removing values from the start or end of arrays, simpler methods are preferred.

To remove items from the end of an array, use `pop`.

```ts
const countries = ["UK", "France", "Germany", "Spain"];
const lastCountry = countries.pop();
console.log(lastCountry); // Spain
console.log(countries); // ["UK", "France", "Germany"]
```

To remove items from the start of an array use `shift`.

```ts
const countries = ["UK", "France", "Germany", "Spain"];
const firstCountry = countries.shift();
console.log(firstCountry); // UK
console.log(countries); // ["France", "Germany", "Spain"]
```

### Hands-on: Pushing and popping

- Create an empty `string` array, called `songs`
- Push three of your favourite song titles onto it
- Pop them off one at a time and display them
- Display the contents of the `songs` array

### Creating arrays from splitting strings

Calling the `split` method on strings produces an array of substrings.

```ts
const beatles = "John,Paul,George,Ringo";
const members = beatles.split(",");
console.log(members); // ["John", "Paul", "George", "Ringo"]
```

Arrays can also be joined to create strings.

```ts
const beatles = "John,Paul,George,Ringo";
const members = beatles.split(",");
const fancyBeatles = members.join("~*~");
console.log(fancyBeatles); // John~*~Paul~*~George~*~Ringo
```

### Hands-on: Convert between CSV and TSV

- Convert a CSV row to TSV
- Convert a TSV row to CSV

### Accessing command-line arguments

We can access the command line arguments passed to a Node application. They are provided as an array of strings.

Install the node types in your current application folder, as follows.

```bash
npm install --save-dev @types/node
```

Packages are discussed in detail later. @types contains TS type definitions for popular JS packages and environments (e.g. Node).

Command line arguments are available as the array `process.argv`.

```ts
console.log(`${process.argv.length - 2} parameter(s) passed`);
console.log(process.argv);
```

The first parameter will be the path to Node (or ts-node). The second parameter is the path to the script (e.g. .`/dist/app.ts`). Any user parameters will start at index 2.

### Hands-on: Working with command line arguments

- Read a file path from the command line and display it
- Display an error if the user doesn’t pass exactly one argument
- Extract and display the filename from the file path

Reading arguments from the command line allows us to build flexible utility applications.

### Sets

Sets are collections of values where every element must be unique. This makes them faster than arrays if we are testing whether a value is in the set.

### Creating sets

Sets are commonly created empty and members (values) are added subsequently.

```ts
const primeSet = new Set<number>();
primeSet.add(2);
primeSet.add(3);
console.log(primeSet); // { 2, 3 }
```

They can also be pre-initialised using, for example, arrays.

```ts
const primeSet = new Set([2, 3, 5, 7, 11]);
```

### Testing for membership of a set

Use the `has` method to test if a set contains a particular value.

```ts
const primeSet = new Set([2, 3, 5, 7, 11]);
console.log(primeSet.has(2)); // true
console.log(primeSet.has(9)); // false
```

### Additional set properties and methods

| Property/Method | Description                | Example               |
| --------------- | -------------------------- | --------------------- |
| `size`          | Number of values in set    | `primeSet.size`       |
| `delete`        | Delete value from set      | `primeSet.delete(2);` |
| `clear`         | Delete all values from set | `primeSet.clear();`   |

### Traditional set operations

TS sets don’t support traditional set operations like intersection, union and difference. If required, these must be implemented manually. This reduces the utility of set collections.

### Maps

Maps have much in common with objects, which are discussed later. They are collections of key-value pairs—associating a key with a value. This makes them useful in tasks that require a lookup table.

If you wanted to look up the international telephone dialing prefix for a country, you could have the country names as keys and the dialing prefixes as the values.

### Creating maps

Maps are usually created empty.

```ts
const dialingCodes = new Map<string, number>();
dialingCodes.set("UK", 44);
dialingCodes.set("France", 33);
console.log(dialingCodes.get("UK")); // 44
```

They can also be preloaded with values.

```ts
const dialingCodes = new Map([
  ["UK", 44],
  ["France", 33],
]);
console.log(dialingCodes.get("UK")); // 44
```

### Checking if a map contains a key

Looking up a key that isn’t in the map will return `undefined`.

To test if a key is in a map, use the `has` method.

```ts
const dialingCodes = new Map<string, number>();
dialingCodes.set("UK", 44);
dialingCodes.set("France", 33);
console.log(dialingCodes.has("UK")); // true
```

### Additional map properties and methods

| Property/Method | Description                 | Example                   |
| --------------- | --------------------------- | ------------------------- |
| `size`          | Number of entries in set    | `dialingCodes.size`       |
| `delete`        | Delete entry from map       | `dialingCodes.delete(2);` |
| `clear`         | Delete all entries from map | `dialingCodes.clear();`   |

### Hands-on: Look up capital cities

Create a map between countries and their capital cities. Look up and display some capitals.
