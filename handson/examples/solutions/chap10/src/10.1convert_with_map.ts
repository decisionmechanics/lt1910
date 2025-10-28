// The following code converts an array of measurements in inches to
// ones in centimeters.
console.log("original with mutation of new centimeters array:");
const inches = [1, 2, 3, 4, 5];
const centimeters: number[] = [];
for (const measure of inches) {
centimeters.push(measure * 2.54);
}
console.log(centimeters);
//This approach mutates the centimeters array by pushing new values onto it
//The original array remains unchanged
console.log("original inches array unchanged = " + inches);

console.log("\nrefactored with map method:");
//Refactor it to use map, thus avoiding the array mutation.
const centimeters2 = inches.map((measure) => measure * 2.54);
console.log("new centimeters2 array returned intact from map():");
console.log(centimeters2);
//The original inches array remains unchanged
console.log("original inches array still unchanged = " + inches);