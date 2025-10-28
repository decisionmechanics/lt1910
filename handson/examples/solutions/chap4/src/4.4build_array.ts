//Starting with an empty numeric array, push items onto it to create
//an array of the first five square numbers (beginning with 1).
let squares: number[] = [];
for (let i = 1; i <= 5; i++) {
  squares.push(i * i);
}
console.log(squares);   // [1, 4, 9, 16, 25]