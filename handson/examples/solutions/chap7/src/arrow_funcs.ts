// There are several different ways to create functions in TS
// One approach that has become increasingly popular is 
// the use of arrow functions with the "fat arrow" syntax
// Arrow functions are often more concise than 
// traditional function expressions

//Parameters are defined to the left of the arrow and the body of the function is to the right of it
// If the function body has multiple statements,
// we can use curly braces to create a block

// in this example, parameter n is a number and the 
// function returns a number
// The function body is a single expression. the return is implicit
// in this case n**3 or n cubed is returned 
const cube = (n: number): number => n ** 3;
console.log(cube(3));



// // Arrow functions can also be used with higher-order functions
// // such as map, filter, and reduce to create more concise and readable code
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n ** 2);
console.log(squares);

// // In summary, arrow functions provide a concise syntax for defining functions
// // and have useful features such as lexical this binding
// // They are a powerful tool in modern TypeScript programming

// // Note: Arrow functions cannot be used as constructors and do not have a prototype property
// // They are best suited for non-method functions and callbacks


// Arrow functions do not have their own this context
// They capture the this value of the enclosing context
// This makes them useful for callbacks and event handlers
// where we want to preserve the this value of the surrounding code
// class Counter {
//     count: number = 0;

//     // increment method uses an arrow function in setInterval
//     // to preserve the this context of the Counter instance
//     start() {
//         setInterval(() => {
//             this.count++;
//             console.log(this.count);
//             if (this.count >= 5) { 
//                 console.log("Counter reached 5, stopping.");
//                 process.exit(0); // Exit the program when count reaches 10
//             }
//         }, 1000); // Increment count every second
//     }
// }

// const counter = new Counter();
// counter.start();