interface IAuthor {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Author implements IAuthor {
    private _firstName: string;
    private _lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get firstName(): string {
      return this._firstName;
    }
    set firstName(value: string) {
      this._firstName = value;
    }
  
    get lastName(): string {
      return this._lastName;
    }
    set lastName(value: string) {
      this._lastName = value;
    }
  
    getFullName(): string {
      return `${this._firstName} ${this._lastName}`;
    }
  }

  console.log('--- Client can access fields via the getters/setters ---');
const Authors: Author[] = [];

Authors.push(new Author('Herman', 'Munster'));
Authors.push(new Author('Harper', 'Lee'));
Authors.push(new Author('F. Scott', 'Fitzgerald'));
Authors.push(new Author('Mark', 'Twain'));
Authors.push(new Author('Lucy Maud', 'Montgomery'));

//call a setter to change the lastName of the first Author
Authors[0].lastName = "Melville"; // change Munster to Melville

console.log("loop to display all Authors");
// we can loop through the array of Author objects
for (const author of Authors) {
    console.log(`${author.firstName} ${author.lastName}`);
}



