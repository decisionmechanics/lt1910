// • The following code contains a logic bug—9 is definitely not prime.
// Can you see the problem?

function isPrime(n: number): boolean {
    if (n < 2) {
        return false;
    }
  

    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("is 9 prime? " + isPrime(9)); // true
for (let j=1; j<=20; j+=1) {
    console.log(`is ${j} prime? ${isPrime(j)}`);
}

// • Whether you spotted the bug or not, step through it using VS Code
// to identify it.