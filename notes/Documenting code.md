## Documenting code

### Why document your code?

- When you’ve just finishing writing a block of code, it’s easy to think the logic is obvious
- If it wasn’t trivial to write, it’s probably not obvious to read
- The next person to read your code is probably your future self
- Good documentation supports the logic of your code
- Provides context
- Highlights any subtle features
- Alerts others to any limitations or weaknesses

### What should I document?

- Document where it adds value
- Don’t document every line just to do it
- As you become more experienced, you will start to get a feel for what is worth documenting
- It often makes sense to document “units” (e.g. functions, modules)
- Document any code where you think you can add insights that wouldn’t be obvious from a quick scan of the code

### Single line comments

The simplest way to document your TS code is using single line comments (`//`).

```ts
// The exclamation mark may be overkill
console.log("Hello from LTREE!");

// example.com is reversed for use in documentation
console.log("Jane Austen");
console.log("jane.doe@example.com");
```

Comments are ignored by the TS compiler.

Single line comments can be placed at the end of a line of code.

```ts
console.log("Hello from LTREE!"); // Output a greeting
```

### Block comments

Block comments (`/* */`) can be used if you need to write extensive comments.

```ts
/*
  Block comments are sometimes easier to read
  if you need to write a number of sentences or
  paragraphs to explain your code.

  Don't feel that your comments have to be terse.
  Don't be needlessly verbose, but say what needs
  to be said.
*/
console.log("Hello from LTREE!");
```

### Structured comments

TSDoc uses specially structured comments that allow them to be utilised by the IDE. It will be discussed in more depth later in the course.

### Hands-on: Creating comments

- Add a single-line comment to your `myinfo` application
- Add a comment at the end of a line of code
- Add a block comment

Run your application and check it still operates as expected.

Make use of comments from the start to clarify what’s happening in your code. It’s a good habit.

### README files

Comments are good for documenting specific blocks of code, but what if you need more general documentation about the application?

It’s common to include a README file in the root of your application to give other developers information they need to get started.

Your README may include

- A description of the project
- A contact e-mail for the project
- Details on how to build and run the application
- Any configuration required (e.g. environment variables, databases)

[Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github) is a very popular format for writing README files.

### Demo: README files in source control

The instructor will demonstrate how README.md files form the documentation page in GitHub repositories.

Source control and GitHub are covered later in the programme.
