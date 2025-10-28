//Parameter values are also scoped to within the function
// and the lifetime of the function call
let n = 999;
function cube(n: number): number {
console.log("inside cube(3) call, inner n parameter =" + n);
n = n ** 3;
console.log("cubed value of parameter n is returned =  " + n);
return n;
}
console.log("outer n before cube() call = " + n);
console.log("cube(n) called with argument value of 3. i.e. cube(3)");
const cubeOf3 = cube(3);
console.log("value returned and saved to cubeOf3 variable is = " + cubeOf3);
console.log("outer n is still = " + n); // 999