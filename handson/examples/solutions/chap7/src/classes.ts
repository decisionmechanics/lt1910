interface IAuthor {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Author implements IAuthor {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log('--- Author class instances ---');
const author1 = new Author('Arthur C.', 'Clarke');
const author2 = new Author('Isaac', 'Asimov');
const author3 = new Author('Ray', 'Bradbury');

console.log(author1.getFullName()); // Arthur C. Clarke
console.log(author2.getFullName()); // Isaac Asimov 
console.log(author3.getFullName()); // Ray Bradbury

// alternatively, we can create an array of Author objects
console.log('--- Array of Author objects ---');
const Authors: Author[] = [];

Authors.push(new Author('Herman', 'Melville'));
Authors.push(new Author('Harper', 'Lee'));
Authors.push(new Author('F. Scott', 'Fitzgerald'));
Authors.push(new Author('Mark', 'Twain'));
Authors.push(new Author('Lucy Maud', 'Montgomery'));

console.log("display first 2 Authors");
// we can access the Author objects in the array by index
console.log(Authors[0].getFullName()); // Herman Melville
console.log(Authors[1].getFullName()); // Harper Lee

console.log("loop to display all Authors");
// we can loop through the array of Author objects
for (const author of Authors) {
    console.log(author.getFullName());
}



