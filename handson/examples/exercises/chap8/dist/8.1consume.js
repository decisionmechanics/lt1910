// import the 8.1module.ts module and import it's throwDice function
// display the results of 10 rolls of two dice
import { throwDice } from "./8.1module.js";
for (let i = 0; i < 10; i++) {
    console.log(`Roll ${i + 1}: ${throwDice(2)}`);
}
// you need to run tsc first to compile the ts files to js
// launch terminal window in VS code
// cd ~course/handson/chap8/solutions/chap8
// tsc
// bun run src/default.ts
// then try opening default.ts in an editor window
// and press F5 to debugging it
// and open the Debug console to see results if needed
//# sourceMappingURL=8.1consume.js.map