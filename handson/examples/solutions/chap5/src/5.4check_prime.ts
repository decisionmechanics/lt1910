// Write code to check if a number is prime. 

// Is 7979 a prime number?
let num: number = 7979;
// Prime numbers are natural numbers greater than 1.
  // Numbers less than or equal to 1 are not prime.
  if (num <= 1) {
    console.log(`${num} is not a prime number.`); 
}
else
  // 2 is the only even prime number.
  if (num === 2) {
    console.log(`${num} IS a prime number.`);
  }
else
  // Even numbers greater than 2 are not prime.
  if (num % 2 === 0) {
    console.log(`${num} is not a prime number.`);
  }
else 
{

  // Check for divisibility by odd numbers from 3 up to the square root of num.
  // We only need to check up to the square root because if a number has a factor
  // greater than its square root, it must also have a factor smaller than its square root.
  const limit = Math.sqrt(num);
  let notaprime = false;
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
       // Found a divisor, so it's not prime
       console.log(`${num} is not a prime number.`);
       notaprime = true;
       break;
    }
  }
  if (notaprime == false)
  console.log(`${num} IS a prime number.`);// No divisors found, so it's prime

}

// Alternative implementation using a function
console.log("Alternative implementation using a function:");
function isPrime(num: number): boolean {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Found a divisor, not prime
  }
  return true; // No divisors found, it's prime
}
// Check if 7979 is prime
const numberToCheck = 7979;
const result = isPrime(numberToCheck);
console.log(`${numberToCheck} is ${result ? 'a prime number' : 'not a prime number'}.`);        
// You can test with other numbers as well
 console.log(`11 is ${isPrime(11) ? 'a prime number' : 'not a prime number'}.`);        
 console.log(`15 is ${isPrime(15) ? 'a prime number' : 'not a prime number'}.`);  

