//The array sort function takes a function as a parameter
//This makes sort a higher-order function
//Mapping a sequence of numbers to another sequence 
// of numbers is a common operation
//The following map function does this, 
// with the transformation applied being supplied as an anonymous function (squaring, in the example

function map(values: number[], fn: (n: number) => number): number[] {
    const result : number[] = [];
    for (const v of values) { result.push(fn(v)); }
    return result;
    }
    const primes = [2, 3, 5, 7, 11];
    const squaredPrimes= map(primes, (n) => n * n);
    console.log(squaredPrimes); // [4, 9, 25, 49, 121]