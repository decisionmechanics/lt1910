## Unit testing (optional)

### What is unit testing?

Unit testing involves testing individual units or components (e.g. functions) of a software application in isolation from the rest of the application. The purpose of unit testing is to validate that each unit of the software performs as designed.

Contrast it with integration testing, which tests that the different subsystems of an application work correctly together.

Unit testing involves writing code to test other code, meaning that it uses skills that developers already possess.

### Characteristics of unit testing

- The unit of code is tested in isolation—external dependencies are typically replaced with stubs or mocks
- Unit tests are automated, meaning they can be run quickly and frequently
- Unit tests should be deterministic
- Unit tests should reflect the system requirements
- Unit tests should be granular
- Unit tests should be simple and readable

### Benefits of unit testing

- Bugs can be detected early
- Integration is easier as the units to be integrated work as intended
- Unit tests document the desired behaviour of the code they test
- Writing unit tests can help improve the architecture of the system, by promoting loose coupling
- Maintenance is easier as the test suite provides confidence that existing functionality hasn’t been broken

### TypeScript unit testing libraries

The 2022 State of JavaScript survey [listed the following testing libraries](https://2022.stateofjs.com/en-US/libraries/testing/), in order of satisfaction (retention).

- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Jest](https://jestjs.io)
- [Storybook](https://storybook.js.org)
- [Cypress](https://www.cypress.io)

Any of these would be excellent choices, but we’ll use Vitest to demonstrate how unit testing works.

### Arrange/Act/Assert

A common way to structure individual tests is to

- Arrange the items needed to prepare the unit for testing
- Act by performing the action to be tested
- Assert that the result of performing the action is what was expected

### A unit of code

The `isPrime` function represents a typical unit of code that we may want to place under test.  Any code to be tested must be exported. It’s common to only test public APIs.

```ts
// primes.ts

export function isPrime(n: number): boolean {
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
```

### Installing Vitest

Vitest isn’t needed in production, so should be installed as a development dependency.

```bash
npm install --save-dev vitest
```

Add the following to your package.json

```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

This will allow the tests to be run using

```bash
npm run test
```

### Write a test

Tests are just TS code. They are generally placed in separate modules—i.e. separate from the code under test.

```ts
// prime.test.ts

import { expect, test } from "vitest";
import { isPrime } from "./prime";

test("isPrime(9) to equal false", () => {
  // Arrange

  const number = 9;

  // Act

  const actual = isPrime(number);

  // Assert

  expect(actual).toBe(false);
});
```

In this test, we call `isPrime` with the argument 9 and assert that we expect the result to be `false`—9 isn’t a prime number.

### Test results

The results of running this test are shown below. The test failed.

```
 DEV  v0.34.6 /Users/andrewtait/Junk/handson/helloworld

 ❯ prime.test.js (1)
   × isPrime(9) to equal false

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  prime.test.js > isPrime(9) to equal false
AssertionError: expected true to be false // Object.is equality

- Expected
+ Received

- false
+ true

 ❯ prime.test.js:15:18
     13|   // Assert
     14| 
     15|   expect(actual).toBe(false);
       |                  ^
     16| });
     17| 

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  16:21:26
   Duration  308ms (transform 42ms, setup 0ms, collect 28ms, tests 8ms, environment 0ms, prepare 84ms)


 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```

### Hands-on: Get the test to pass

- Fix the bug to get the test to pass
- Re-run the tests to confirm that you have fixed the code correctly
- Add tests to see if -1, 0, 2 and 11 are prime

### Demo: Vitest plugin

The instructor will demonstrate running tests using the [Vitest VS Code plugin](https://github.com/vitest-dev/vscode).

### Test-Driven Development

Test-Driven Development (TDD) is a software development methodology where tests are written before the code that needs to be tested. It follows a series of iterative steps known as Red-Green-Refactor.

- Red involves writing a test for code that doesn’t exist. It will obviously fail.
- Green involves writing the minimum amount of code that will get the test to pass.
- Refactor involves improving the quality of the code without breaking the test.

This process has several benefits.

- Code is tested from the start
- Code is written to facilitate testing
- A clear specification is provided before any code is written

### Running tests in automated builds

Test suites are usually a key component of automated build and deployment pipelines. If the tests fail, the deployment is stopped. This reduces the chances of bad code reaching production.
