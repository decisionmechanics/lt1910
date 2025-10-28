//Closures are a powerful, but advanced, concept in TS
//They allow functions to “capture” values defined 
// in an outer context

function createUniqueIdGenerator(): () => string {
    let id = 0;
    // id in function defined in outer context
    return function (): string { id += 1; return `id_${id}`; };
}
const generateId = createUniqueIdGenerator();
console.log(generateId()); // id_1
console.log(generateId()); // id_2