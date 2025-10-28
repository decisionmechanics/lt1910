//Create a module with a function called throwDice that takes the
//number of dice to be thrown and returns the total pips shown for the
//roll.
export function throwDice(numDice) {
    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * 6) + 1;
    }
    return total;
}
//# sourceMappingURL=8.1module.js.map