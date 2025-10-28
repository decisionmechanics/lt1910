const author = {
    firstName: "Kurt",
    lastName: "Vonnegut",
    sampleOfBooks: [
    "Cat's Cradle",
    "Player Piano",
    "Mother Night",
    "Sirens of Titan",
    "Slaughterhouse-Five",
    ],
    born: new Date("1922-11-11"),
    died: new Date("2007-04-11"),
    spouse: "Jane Marie Cox",
    };
    console.log(author.sampleOfBooks[1]); // Player Piano
    
    // hover over the author variable to examine 
    // the inferred type of the object.
    // Object creation in JS and TS is very lightweight
    // OLN = Object Literal Notation
    
