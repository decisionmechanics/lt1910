//Functions can call themselves
//Powerful mechanism for solving problems that can be 
// decomposed into smaller problems—although it can result in code that is difficult to read
//The following function computes the nth number in the 
// Fibonacci sequence 
// (https://en.wikipedia.org/wiki/Fibonacci_sequence)

function fibonacci(n: number): number {
    if (n <= 1) { return n; }
    return fibonacci(n - 1) + fibonacci(n - 2); // calls itself
}
console.log(fibonacci(10)); // 55