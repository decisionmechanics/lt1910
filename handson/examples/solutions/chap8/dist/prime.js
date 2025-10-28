function isPrime(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
export function getNthPrime(n) {
    if (n < 1)
        return undefined;
    let count = 0;
    let num = 1;
    while (count < n) {
        num++;
        if (isPrime(num)) {
            count++;
        }
    }
    return num;
}
export default isPrime;
//# sourceMappingURL=prime.js.map