// Refactor the raiseToPower function to use the arrow function syntax.
// function raiseToPower(base: number, exponent: number = 2): number {
// return base ** exponent
// }
const raiseToPower = (base: number, exponent: number = 2): number => base ** exponent;

console.log("3 squared = " + raiseToPower(3)); // 9
console.log("2 cubed = " + raiseToPower(2, 3)); // 8

// Arrow functions are a more concise syntax for writing functions
// They also lexically bind the this value, which can be useful in certain contexts
// However, they cannot be used as constructors and do not have their own this, arguments, super, or new.target bindings
