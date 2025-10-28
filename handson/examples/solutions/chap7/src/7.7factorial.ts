// Create a recursive function to calculate (the factorial of n). Check
// your output against Math.factorial.
// • Refactor your recursive factorial function to use a loop instead of
// recursion.
function factorial(n: number): number {
    if (n <= 1) { return 1; }
    return n * factorial(n - 1); // calls itself
}
console.log("factorial recursive 5! = " + factorial(5));

function factorialLoop(n: number): number {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("factorial loop 5! = " + factorialLoop(5));
// Note: JavaScript does not actually have a built-in Math.factorial function
// but you can extend the Math object if desired
// (not recommended for production code)
(Math as any).factorial = factorial; // point to our function
console.log((Math as any).factorial(5)); // 120 

