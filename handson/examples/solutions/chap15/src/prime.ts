export function isPrime(n: number): boolean{
    if(n <= 1) return false;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}
// version of prime function that has an error
// is now fixed to be i<=Math.sqrt(n)