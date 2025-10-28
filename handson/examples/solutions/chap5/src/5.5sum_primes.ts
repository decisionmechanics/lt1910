// Here’s an array of the first 10 primes.
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
// Sum them using a for…of loop. The result should be 129.
let sum = 0;
for (const prime of primes) {
  sum += prime;
}
console.log(`The sum of the first 10 primes is ${sum}.`);
