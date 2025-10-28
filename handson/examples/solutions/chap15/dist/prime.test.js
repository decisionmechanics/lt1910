// prime.test.ts
import { expect, test } from "vitest";
import { isPrime } from "./prime";
test("isPrime(9) to equal false", () => {
    expect(isPrime(9)).toBe(false);
});
// You can run this test in the terminal using the Vitest testing framework. 
// First, ensure you have Vitest installed in your project. If you haven't installed it yet, you can do so by running:
// npm install --save-dev vitest
// Once Vitest is installed, you can run your tests by executing the following command in your terminal:
// npx vitest
// This command will look for test files (like prime.test.ts) and execute the tests defined within them. 
// Make sure you are in the root directory of your project when you run this command.
//# sourceMappingURL=prime.test.js.map