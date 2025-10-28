// Use the spread operator to append two arrays.
const primes = [2, 3, 5, 7, 11];
console.log("Original primes array: " + primes);
const morePrimes = [13, 17, 19];
console.log("More primes array: " + morePrimes);


// Append morePrimes to primes using the spread operator
const allPrimes = [...primes, ...morePrimes];

console.log("morePrimes appended to primes= " + allPrimes); // [2, 3, 5, 7, 11, 13, 17, 19]

// Explanation: The spread operator (...) is used to expand the elements of both arrays
// into a new array called allPrimes. This way, we create a new array that contains
// all the elements from both primes and morePrimes without modifying the original arrays.
