// You can create a variable with a let binding without assigning an initial value to it
let author;  // hover shows type as 'any'
// The initial value will be undefined
console.log(author); // undefined
// The compiler won’t be able to infer a type as no value has been given
let author2 = "Jane Austen"; // hover shows author: string inferred
console.log(author2);

// in typescript, like other strict languages you can pre-declare the type of a variable
let author3: string;
//console.log(author3); // but still undefined
// If you try to use the variable before assigning a value, you’ll get an error
//console.log(author3.length); // Error: Variable 'author3' is used before being assigned

author3 = "Charlotte Bronte"; // now we assign a string value
console.log(author3);
// If you try to assign a value of a different type, you’ll get an error
//author3 = 42; // Error: Type 'number' is not assignable to type 'string'

