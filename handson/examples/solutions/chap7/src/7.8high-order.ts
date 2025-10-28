// • Create a filter function that takes an array of numbers, and a
// function that returns a Boolean (a testfunc function) and returns a
// list of numbers that return true for that function.
// • Note that map and filter functions already exist in TS. They will be
// covered later.
function filter(numbers: number[], testfunc: (num: number) => boolean): number[] {
    let result: number[] = []; // new array to hold results
    for (let num of numbers) {  // for each number
        if (testfunc(num)) { // if testfunc returns true
            result.push(num); // add to results array
        }
    }
    return result;// return new results array
}

console.log(filter([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0)); // [2,4,6]


// Note: Arrays have a built-in filter function 
// that can be used as follows:
console.log([1, 2, 3, 4, 5, 6].filter((x) => x % 2 === 0)); // [2,4,6]
