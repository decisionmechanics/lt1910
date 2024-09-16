## Objects

Objects are collection types. They have a similar functionality to maps as they represent a mapping between keys and values.

In one way, they are less powerful than maps, as they can only have string keys—maps can have keys of any type. However, objects are very easy to work with in TS, so are ubiquitous.

### Creating objects

Object creation in TS is very lightweight.

```ts
const author = {
  firstName: "Kurt",
  lastName: "Vonnegut",
  sampleOfBooks: [
    "Cat's Cradle",
    "Player Piano",
    "Mother Night",
    "Sirens of Titan",
    "Slaughterhouse-Five",
  ],
  born: new Date("1922-11-11"),
  died: new Date("2007-04-11"),
  spouse: "Jane Marie Cox",
};

console.log(author.sampleOfBooks[1]); // Player Piano 
```

### Hands-on: Object types

Enter the object above into the IDE and hover over the `author` variable to examine the inferred type of the object.

### Updating object values

New values can be assigned to object keys.

```ts
const author = {
  firstName: "Kurt",
  lastName: "Vonnegut",
  spouse: "Jane Marie Cox",
};

author.spouse = "Jill Krementz";
console.log(author.spouse); // Jill Krementz
```

### Hands-on: Adding new keys

Try assigning a `birthplace` key.

```ts
author.birthplace = "Indianapolis, Indiana";
```

What happened?

### Assigning new keys

The inferred type of an object can only be based on the keys assigned at creation. If there are additional, optional keys, then these should be specified via an explicit type.

```ts
const author: {
  firstName: string;
  lastName: string;
  spouse: string;
  birthplace?: string;
} = {
  firstName: "Kurt",
  lastName: "Vonnegut",
  spouse: "Jill Krementz",
};

author.birthplace = "Indianapolis, Indiana";
console.log(author); 
```

### Deleting keys

Optional keys can be deleted.

```ts
const author: {
  firstName: string;
  lastName: string;
  spouse: string;
  birthplace?: string;
} = {
  firstName: "Kurt",
  lastName: "Vonnegut",
  spouse: "Jill Krementz",
  birthplace: "Indianapolis, Indiana",
};

delete author.birthplace;

console.log(author);
```

Attempting to delete a required key will cause a compiler error.

```ts
const author: {
  firstName: string;
  lastName: string;
  spouse: string;
  birthplace?: string;
} = {
  firstName: "Kurt",
  lastName: "Vonnegut",
  spouse: "Jill Krementz",
  birthplace: "Indianapolis, Indiana",
};

// fails to compile
delete author.spouse;
```

### Arrays of objects

Arrays can store objects.

```ts
const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
  },
];

for (const book of books) {
  console.log(book.title + " by " + book.author);
}
```

### Nested objects

Objects can be nested to arbitrary levels.

```ts
const authors = [
  {
    name: "Kurt Vonnegut",
    books: [
      {
        title: "Player Piano",
        publicationYear: 1952,
      },
    ],
  },
];

console.log(authors[0].books[0].title); // Player Piano
```

### Type aliases

If a complex type is required throughout an application, it can be defined using a type alias.

```ts
type Movie = {
  title: string;
  year: number;
  prequelTitle?: string;
  sequelTitle?: string;
};

const movies: Movie[] = [
  {
    title: "Raiders of the Lost Ark",
    year: 1981,
    sequelTitle: "Indiana Jones and the Temple of Doom",
  },
  {
    title: "Indiana Jones and the Temple of Doom",
    year: 1984,
    prequelTitle: "Raiders of the Lost Ark",
    sequelTitle: "Indiana Jones and the Last Crusade",
  },
];

for (const movie of movies) {
  console.log(`${movie.title} [${movie.year}]`);

  if (movie.prequelTitle) {
    console.log(`  Prequel: ${movie.prequelTitle}`);
  }

  if (movie.sequelTitle) {
    console.log(`  Sequel: ${movie.sequelTitle}`);
  }
}
```

### Hands-on: Todo item type alias

Create a type alias for a todo item. It should include

- description
- optional due date
- whether completed
- optional tags

Add several todo items to a list of type `Todo[]`.

### Interfaces

Interfaces can be used to define the “shape” of an object—i.e. names and types of properties and methods.

```ts
interface IMovie {
  title: string;
  year: number;
}

const raidersOfTheLostArk: IMovie = {
  title: "Raiders of the Lost Ark",
  year: 1981,
};

console.log(raidersOfTheLostArk);
```

The interface defines a contract that must be satisfied by any object that implements it.

There is considerable overlap between type aliases and interfaces. The choice of which to use is often a matter of personal preference, or organisational convention.

Interfaces tend to provide a better tooling experience—through enhanced error messages and autocompletion. Type aliases are more versatile, so tend to be the better choice if you are dealing with complex type definitions.

### Hands-on: Sports results

Pick your favourite sport and define an interface that describes the shape of an event. So, for football, you might have an `IMatch` interface containing

- Home Team
- Away Team
- Date
- Home Goals
- Away Goals

Create an array containing a number of these events and display them using a for loop.

Convert your interface to a type alias and re-run your code.

Note that interfaces and type alias can both be used here.


