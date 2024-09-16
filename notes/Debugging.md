## Debugging

### What is debugging?

Bugs are flaws in a program that result in incorrect results. Debugging is the art of squashing them.

Debugging is a crucial aspect of software development—and where professional developers spend most of their time.

### Types of bugs

- Syntax errors are related to incorrect use of programming language syntax
- Runtime errors (crashes) occur when the program is executing
- Logic errors occur when the program doesn’t crash, but produces incorrect results due to flaws in the logic
- Semantic errors occur when the developer has misunderstood the specification

### The debugging process

- Identify
- Diagnose
- Isolate
- Resolve
- Verify

### The debugging mindset

- Be systematic
- Develop minimal examples that replicate the problem
- Keep calm

### Debugging strategies

- Divide and conquer
- Rubber duck
- `printf`

### Setting up debugging in Visual Studio Code

Make sure the `sourceMap` setting is enabled in tsconfig.json. A source map provides a mapping between the TS source code and the JS that is actually executed.

Go to the “Run and Debug” view in VS Code and click on the “create a launch.json file” link. Select “Node.js” as the debugger. This creates a launch.json file within a .vscode folder. Add a `preLaunch` task to end up with the following file.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/index.js",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/**/*.js"],
    }
  ]
}
```

- `program` is the entry point
- `preLaunchTask` compiles the program prior to launching it
- `outFile` is where the debugger looks for the source maps

You can hover over the keys in VS Code for more information.

### Demo: Debugging using Visual Studio Code

The following code has a simple logic bug in it.

```ts
function calculateProduct(numbers: number[]): number {
  let result = 0;

  for (const n of numbers) {
    result *= n;
  }

  return result;
}

console.log(calculateProduct([2, 3, 5, 7, 11]));
```

Let’s explore it using the VS Code debugger. We’ll set a breakpoint and step through the code to search for the bug.

### Hands-on: Squash a bug

The following code contains a logic bug—9 is definitely not prime. Can you see the problem?

```ts
function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(9)); // true
```

Regardless of whether you spotted the bug or not, step through it using VS Code to identify it.

### Writing debuggable code

- Document code extensively
- Use functions and modules
- Write loosely coupled code
- Utilise logging
- Write unit tests

### Preventing future bugs

- Look for similar bugs (by type and location)
- Document and share insights from bug fixes
- Update unit tests
- Conduct code reviews
- Use static analysis tools
- Encourage a culture of quality

