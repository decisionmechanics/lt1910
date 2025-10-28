// The call stack represent the list of functions that are currently executing
// Every time a new function is called, it’s added to the call stack
// It’s removed when the function completes
// The call stack is an important tool when debugging broken applications
// Knowing the chain of execution that led to the error is essential information for identifying and fixing the underlying problem

// The following code produces an error

// function a() { b(); }
// function b() { c(); }
// function c() { d(); }
// function d() { throw new Error(); }
// a();
// recursive function calls add new frames to the call stack
// When the error is thrown, the call stack is printed to the console
// showing the chain of function calls that led to the error
// The call stack shows that function a called b, which called c, which called d, which threw the error
// This information is useful for debugging the error and understanding how it occurred

//comment the above lines to run the below code

//The call stack has a limited size
//Puts a limit on how many times a recursive function can call itself

function decrement(n: number) {
if (n === 0) {
return 0;
}
return decrement(n -1);
}
// should cause a stack overflow
decrement(1_000_000);
// maximum call stack size exceeded
