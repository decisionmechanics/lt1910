## Regular expressions (optional)

### What are regular expressions?

Regular expressions (regexes) are patterns used for searching, matching and manipulating text. They utilise a specific syntax to define complex search patterns, enabling the efficient handling of strings for validation, extraction and transformation. Their versatility and power make them a crucial tool in text processing and validation tasks.

### What problems do regular expressions solve?

Some of the tasks that regexes are particularly suited to are

- data validation
- input validation
- text search
- data cleaning

### Regular expression patterns

Regexes are patterns that are matched against sequences of characters. The patterns include a range of special characters.

For example, the following expression can be used to match .com e-mail addresses.

```
^.+@.+\.com$
```

### Pattern components

Regex patterns comprise various tokens.

| Character | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `.`       | Match character, except line terminators                     |
| `\d`      | Match digit                                                  |
| `\D`      | Match non-digit                                              |
| `\n`      | Match linefeed                                               |
| `\r`      | Match carriage return                                        |
| `\s`      | Match whitespace character                                   |
| `\S`      | Match non-whitespace character                               |
| `\t`      | Match tab                                                    |
| `\w`      | Match alphanumeric character                                 |
| `\W`      | Match any non-alphanumeric character                         |
| `[abc]`   | Match any one of the bracketed set of characters             |
| `[a-z]`   | Match any character in the range                             |
| `^[abc]`  | Match any character not in the set/range                     |
| `a|b`     | Match `a` or `b`                                             |
| `\`       | Escape special characters                                    |
| `^`       | Start of string                                              |
| `$`       | End of string                                                |
| `\b`      | Match a word boundary                                        |
| `\B`      | Match a non-word boundary                                    |
| `*`       | Match zero or more of the previous characters                |
| `+`       | Match one or more of the previous characters                 |
| `{n,m}`   | Match between n and m occurrences of the previous characters |
| `(abc)`   | Create an atomic group                                       |

### Regular expression methods

There are a number of TS string methods that support regular expressions

- `exec`
- `match`
- `replace`
- `search`
- `split`
- `test`

### Validating strings

To check if a string adheres to a given regex pattern, use

```ts
const email = "Jane.Doe@example.com";

console.log(/^.+@.+\.com$/.test(email)); // true
```

### Replacing values

To replace part of string, use

```ts
const email = "Jane.Doe@example.com";

console.log(email.replace(/\.com$/, ".org")); // Jane.Doe@example.org
```

### Splitting strings

To split strings, use

```ts
const s = "This\tis a\tstring\t  with  some\ttabs    and\tspaces.";

console.log(s.split(/\s+/).length); // 9
```

### Extracting content

```ts
const message = "I can meet on 2023-10-05, 2023-10-31 or 2023-11-15.";
const regex = /\d{4}-\d{2}-\d{2}/g;
const dates = message.match(/\d{4}-\d{2}-\d{2}/g);
console.log(dates); // ["2023-10-05", "2023-10-31", "2023-11-15"]
```

The `g` flag at the end of the regex means match all occurrences (global search).

### Demo: Testing regular expressions

The instructor will demonstrate how to use the [regular expressions 101](https://regex101.com) site to develop and test regular expressions.

### Hands-on: Extract URLs

Write a regex that can extract URLs from text. URLs can start with http:// or https://. Use it with the `match` method to perform the extraction.

### Use sparingly

Regexes are incredibly powerful. They can do much, much more than what we have covered here. But they are also notoriously difficult to read and understand. Debugging regexes can be very frustrating. Sometimes it can be easier to parse the string manually.

Don’t feel you have to use regexes for all string operations.
