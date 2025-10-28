// Write a function, convertInchesToCentimeters that takes a
// distance in inches as a parameter and returns the corresponding
// distance in centimeters. Make sure it’s explicitly typed.
// • Use the function to convert 12 inches to centimeters
function convertInchesToCentimeters(inches: number): number {
    return inches * 2.54;
}
console.log(convertInchesToCentimeters(12)); // 30.48
// 12 inches is 30.48 centimeters
// Try to call the function with a string parameter
// to see the type checker in action
// convertInchesToCentimeters("12"); // Argument of type 'string' is not assignable to parameter of type 'number'.  
// Hover over the function name to see its type signature
