// As the body of a function is a block, any variables we define within it will be scoped locally to the function
let i= 999;
function countdown() {
for (let i= 10; i> 0; i--) { // iis local
console.log(`inner i = ${i}...`);
}
console.log("Lift off! outside of loop, still in func, outer i = " + i); // outer i = 999
}
console.log("after func defined, not yet called, outer i still = " + i); // 999
console.log("Calling countdown func... has it's own local i");
countdown();
console.log("after countdown() call, outer i still = " + i); // 999
