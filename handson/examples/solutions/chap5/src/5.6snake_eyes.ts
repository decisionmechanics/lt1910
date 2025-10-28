// given a function that rolls a die,
function rollDie() :number {
    return Math.floor(Math.random() * 6) + 1;
    }
//Calculate the average number of rolls you have to do to get “snake eyes” 
//(one pip on the face of each of two dice). Average over 100“snake eyes”.
// // You will need two loops:
//An outer loop, which is a standard for loop with 100 iterations
//An inner while loop, which continues until you hit “snake eyes”

//variables to track total rolls and target rolls
let totalRolls : number= 0;
const targetRolls: number = 1000;
//outer loop for 100 iterations
for (let i = 0; i < targetRolls; i++) {
    let die1 : number = 0;
    let die2 : number = 0;
    //inner loop to roll until snake eyes
    while (die1 !== 1 || die2 !== 1) {
        die1 = rollDie();
        die2 = rollDie();
        totalRolls++;
    }
}
//calculate average rolls to get snake eyes with no decimal places 
const averageRolls = totalRolls / targetRolls;
console.log(`Average rolls to get snake eyes: ${averageRolls.toFixed(1)}`);    
//expected output: Average rolls to get snake eyes: 36
//(actual output will vary due to randomness) 
// try 1000000 for targetRolls for a more accurate average
