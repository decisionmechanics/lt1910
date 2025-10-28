// Create a function that takes an imperial measure value, and a
// conversation factor, and returns the converted metric value. Set the
// default conversation factor to be 2.54 (i.e. the ratio of centimeters to
// inches).
function convertToMetric(imperial: number, factor: number = 2.54): number {
    return imperial * factor;
}
console.log("5 inches is " + convertToMetric(5,2.54) + " cm"); // 12.7
console.log("10 inches is " + convertToMetric(10,2.54) + " cm"); // 25.4
console.log("10 feet is " + convertToMetric(10, 30.48) + " cm"); // 304.8
console.log("5 inches (leverage default) is " + convertToMetric(5) + " cm"); // 12.7



// Example function that takes a metric measure value, and a
// conversation factor, and returns the converted imperial value. Set the
// default conversation factor to be 2.54 (i.e. the ratio of centimeters to
// inches).
// function convertToImperial(metric: number, factor: number = 2.54): number {
//     return metric / factor;
// }
// console.log("12.7 cm is " + convertToImperial(12.7) + " inches"); // 5
// console.log("25.4 cm is " + convertToImperial(25.4) + " inches"); // 10
// console.log("304.8 cm is " + convertToImperial(304.8, 30.48) + " feet"); // 10
