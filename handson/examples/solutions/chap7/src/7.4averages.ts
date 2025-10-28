// Write a function that takes an array of numbers and returns the
// average (mean) value of that array.

// using a separate sum function
function average(numbers: number[]): number {
    return sum(numbers) / numbers.length;
}
function sum(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}

// alernative using inline reduce
function average2(numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
}

console.log("with two functions: " + average([1, 2, 3, 4, 5])); // 3
console.log("leveraging reduce: " + average2([1, 2, 3, 4, 5])); // 3

// // Now write a function that takes an array of numbers and returns
// // an object containing the average (mean), median, and mode of that array.
// function averages(numbers: number[]): { mean: number; median: number; mode: number | null } {
//     const mean = average(numbers);

//     const sorted = [...numbers].sort((a, b) => a - b);
//     const mid = Math.floor(sorted.length / 2);
//     const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

//     const frequency: { [key: number]: number } = {};
//     let maxFreq = 0;
//     let mode: number | null = null;

//     for (const num of numbers) {
//         frequency[num] = (frequency[num] || 0) + 1;
//         if (frequency[num] > maxFreq) {
//             maxFreq = frequency[num];
//             mode = num;
//         } else if (frequency[num] === maxFreq) {
//             mode = null; // No unique mode
//         }
//     }

//     return { mean, median, mode };
// }

// console.log(averages([1, 2, 2, 3, 4])); // { mean: 2.4, median: 2, mode: 2 }
