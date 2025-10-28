
//Adding new keys to an object is tricky in TS
// In JS you can add new keys to an object at any time
// In TS the object type is inferred from the initial
// object declaration. Adding new keys later will
// cause an error.
const author = {
    firstName: "Kurt",
    lastName: "Vonnegut",
    spouse: "Jane Marie Cox",
    };
    author.spouse = "Jill Krementz";
    console.log(author.spouse); // Jill Krementz
    
    //Try assigning a birthplace key. uncomment the line below
   // author.birthplace = "Indianapolis, Indiana"; //TS error
    //What happened?
    // this works in JS but not in TS

    //solution:
    // you can provide an explicit type for the object
    // that includes an optional birthplace key
    // denoted by the ? after the key name for an optional key
const author2: { firstName: string; lastName: string; spouse: string; birthplace?: string } = {
    firstName: "Kurt",
    lastName: "Vonnegut",
    spouse: "Jane Marie Cox",
    };
    author2.spouse = "Jill Krementz";
    console.log(author2.spouse); // Jill Krementz
    //Try assigning a birthplace key.
   author2.birthplace = "Indianapolis, Indiana";
    //What happened?
    // this works in JS but not in TS
    // try adding an optional birthplace key to the object
    // declaration above to fix the error.
    console.log(author2.birthplace); // Indianapolis, Indiana
