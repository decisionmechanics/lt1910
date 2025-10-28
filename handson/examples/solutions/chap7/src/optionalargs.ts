// In TS, functions can be defined to allow optional parameters
// Here’s how we can refactor the raiseToPowerfunction to square values if no exponent is provided
function raiseToPower(base: number, exponent: number = 2): number {
return base ** exponent;
}
console.log("2 cubed = " + raiseToPower(2, 3)); // 8
console.log("2 squared (optional=2) = " + raiseToPower(2)); // 4