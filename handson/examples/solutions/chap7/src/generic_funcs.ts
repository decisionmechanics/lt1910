//What if we want to map strings to numbers (e.g. using parseFloat)?
//We can achieve this using generic types
// what if we want to convert numbers to Booleans (e.g. is this an odd number)?

// the generic map function can be used to transform
// an array of numbers into an array of Booleans denoting whether the corresponding number was odd

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(map(numbers, (n: number) => n % 2 === 1));

/// The following generic 'map' function takes an array of type T and a function that takes a T and returns a U
// and returns an array of U
// assuming the second argment is a function fn returning a Boolean
// determining whether the number is odd: returning (n % 2 === 1)
// the fn is called for each element of the items
// array and he resulting output is an array U of Booleans

function map<T, U>(items: T[], fn: (arg: T) => U): U[] {
    const result: U[] = [];
    for (let item of items) {
        result.push(fn(item));
    }
    return result;
}

// square of primes example from high_order_func.ts also works with generic map
const primes = [2, 3, 5, 7, 11];
const squaredPrimes= map(primes, (n) => n * n);
console.log(squaredPrimes); // [4, 9, 25, 49, 121]