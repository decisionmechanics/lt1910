// coalecing operator ??
let nullvar: number | null = null;
let undefvar: number | undefined = undefined;
let numvar: number = 1;
console.log(nullvar ?? 1); //checking if its null
console.log(undefvar ?? 2); //checking if its undefined
console.log(numvar ?? 2); //checking if its a number. could be NaN too
// the same with ||
console.log(nullvar || 1); 
console.log(undefvar || 2);
console.log(numvar || 2);

//coalesing operator works with other types too
let strvar: string | null = null;
let zerovar: number | undefined = 0;
let boolvar: boolean | undefined = false
console.log("coalescing with other types:");
console.log(strvar ?? "default"); // "" is not null or undefined, so it is returned
console.log(zerovar ?? 42); // 0 is not null or undefined, so it is returned
console.log(boolvar ?? true); // false is not null or undefined, so it is returned

console.log("the same with ||:");
//the same with ||
console.log(strvar|| "default"); // "" is falsy, so "default" is returned
console.log(zerovar || 42); // 0 is falsy, so 42 is returned
console.log(boolvar || true); // false is falsy, so true is returned

// //combining with &&
// console.log("combining with &&:");
// console.log((numvar ?? 1) && 2); // 2
// console.log(numvar ?? (1 && 2)); // 1