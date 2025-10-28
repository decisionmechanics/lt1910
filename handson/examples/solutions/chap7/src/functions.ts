// A function is a block of statements labelled 
// with an identifier
// This allows the entire block to be referred 
// to by this identifier

function displayGreeting() {
    console.log("Hi.");
    console.log("How are you today?");
}
displayGreeting();

// Once the displayGreetingfunction has been defined you can use it everywhere and get a consistent greeting
// Note that it’s common to use action/verb-oriented names for functions

// A subroutine is a function that doesn’t return a value, 
// and is called for the side-effect it produces
// displayGreetingfunction is conceptually a subroutine
// because it doesn't return a value (had no return statement)
// and hovering over it in the editor, shows its type is void
// It has the side-effect of displaying text via console.log

// In TypeScript (TS), a function that doesn’t return a value
// should have the return type void, as follows:
function displayGreeting2(): void {
    console.log("Hi.");
    console.log("How are you today?");
}

// A “true” function will return a value
function getPi(): number {
    return 3.14;
}
console.log(getPi());

//In TS, both subroutines and “true” functions use the function keyword
//and are  referred to generically as “functions”
