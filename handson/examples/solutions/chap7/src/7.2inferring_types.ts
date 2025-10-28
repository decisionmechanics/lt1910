//hover over the function to see the inferred return type
function getPi() {
return 3.14;
}
// inferred return type is number
// While TS can often infer the return type of a function, explicitly
// defining types makes it clear to a developer reading the code, and
// ensures that the return type is what we want it to be.

function getPiExplicit(): number {
return 3.14;
}

console.log(getPi()); // 3.14
console.log(getPiExplicit()); // 3.14

// // Explicitly defining types is especially important for functions that
// // return complex objects, or where the return type is not obvious.
// function createUser(name: string, age: number): { name: string; age: number } {
//     return { name, age };
//     }
// console.log(createUser("Alice", 30)); // { name: 'Alice', age: 30 }
// //to see it working, type console.log(createUser( in the editor))
// // VS Code will display the inferred return type of the function