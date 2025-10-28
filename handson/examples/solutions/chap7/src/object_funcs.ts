//TS objects can contain functions
//These functions can reference the object’s values 
// via the keyword  this

const author = {
    firstName: "Herman", 
    lastName: "Melville",
    getFullName() { 
        return `${this.firstName} ${this.lastName}`; 
    },
};  // getFullName is a 'method' of the author object

console.log(author.getFullName()); // Herman Melville
author.firstName = "Harper";
author.lastName = "Lee";
console.log(author.getFullName()); // Harper Lee
