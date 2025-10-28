//Start with the following array. 
let nums : number[] = [1, 2, 3, 100, 7, 8, 9, 10];
// Transform it to an array of the numbers 1 through 10 
// using a single splice call which deletes and adds items.
console.log(nums);  // [1, 2, 3, 100, 7, 8, 9, 10];
nums.splice(3, 1, 4, 5, 6);
console.log(nums);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
