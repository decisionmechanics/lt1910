// Functions can take parameters that influence the operation of the function
function raiseToPower(base: number, exponent: number): number 
{
return base ** exponent; 
}
// argument values are passed to the function when it is called
// argument values intialize the parameter variables
// within the function when it is called
// in the order they are defined
console.log("passing two parameters");
console.log("2 squared = " + raiseToPower(2, 2)); // 4
console.log("2 cubed = " + raiseToPower(2, 3)); // 8

// Parameterizing functions makes them more reusable
// Too many parameters can make functions difficult to use. 
// Striking the correct balance is a design skill

// You can also pass multiple values in a single object parameter
// or an array parameter or an JSON string parameter
// This is useful when a function needs many parameters
// or when the number of parameters is variable
// or when the parameters are related

// Example using an raiseToPower2 function 
// with an object parameter
interface PowerParams
{
base: number;
exponent: number;
}

function raiseToPower3(params: PowerParams): number 
{
return params.base ** params.exponent; 
}
console.log("passing an object parameter");
// set arguments as object
const squareDetailsObj = {"base":3,"exponent":2};
const cubeDetailsObj = {"base":3,"exponent":3};
console.log("3 squared = " + raiseToPower3(squareDetailsObj)); // 9
console.log("3 cubed = " + raiseToPower3(cubeDetailsObj)); // 27
// or pass object directly via OLN
console.log("pasing directly via OLN");
console.log("3 squared = " + raiseToPower3({base: 3, exponent: 2})); // 9
console.log("3 cubed = " + raiseToPower3({base: 3, exponent: 3})); // 27

// Example using an raiseToPowerA function 
// with an array parameter
function raiseToPowerA(params: number[]): number 
{
return params[0] ** params[1]; 
}
console.log("passing an array parameter");
console.log("4 squared = " + raiseToPowerA([4, 2])); // 16
console.log("4 cubed = " + raiseToPowerA([4, 3])); // 64

// Example using an raiseToPower4 function with a JSON
// (JavaScript Object Notation) string parameter

function raiseToPower4(params: string): number 
{
let obj = JSON.parse(params); // convert JSON string back to object 
return obj.base ** obj.exponent; // use object properties 
}
console.log("passing a JSON string variable as parameter");
const squareJSON = '{"base":4,"exponent":2}';
const cubeJSON = '{"base":4,"exponent":3}';
console.log("4 squared = " + raiseToPower4(squareJSON)); //16
console.log("4 cubed = " + raiseToPower4(cubeJSON)); //64
// or pass JSON string directly via string. note single quotes
console.log("passing JSON string directly");
console.log("4 squared = " + raiseToPower4('{"base":4,"exponent":2}')); // 64
console.log("4 cubed = " + raiseToPower4('{"base":4,"exponent":3}')); // 256
