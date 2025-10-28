console.log("1" + "1"); // 11
console.log(parseFloat("1") + parseFloat("1")); // 2

// //Number will take a string and convert it to a number value
//console.log("convert string 12.70 to number:");
// console.log(Number("12.70")); // 12.7

// //parseFloat will also convert strings to numbers
// console.log("convert string 12.70 to float:");
// console.log(parseFloat("12.70")); // 12.7

// //Note that parseFloat will discard any trailing values that aren’t valid
// console.log("convert string 12.7whatisthis?!! to float:");
// console.log(parseFloat("12.7whatisthis?!!")); // 12.7

// //TS also provides parseInt, 
// // but its behavioris more complex and can result in problems
// console.println("convert string 12.7 to int: with parseInt");
// console.log(parseInt("12.7")); // 12
//console.log("convert string 12.7whatisthis?!! to int: with parseInt");
// console.log(parseInt("12.7whatisthis?!!")); // 12
//console.log("convert string 0xF to int: with parseInt");
// console.log(parseInt("0xF")); // 15
//console.log("convert string F base 16 to int: with parseInt");
// console.log(parseInt("F", 16)); // 15
// //but be careful with leading zeros, which can imply octal (base 8) instead of decimal (base 10)
// console.log("convert string 017 to int: with parseInt");
// console.log(parseInt("017")); // 15 in non-strict mode, 17 in strict mode
// //For these reasons, prefer Number or parseFloat over parseInt

// //Numbers can be converted to strings using
//console.log("convert number 1 to string:");
// console.log((1).toString()); // 1
// console.log("convert number 2 to string with 2 decimal places:");
// console.log((2).toFixed(2)); // 2.00

// //string interpolation is often easier
//console.log("string interpolation examples:");
// console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2
// console.log(`2.5 rounded to 2 decimal places is ${2.5.toFixed(2)}`); // 2.5 rounded to 2 decimal places is 2.50
// console.log(`12.7 is ${Number("12.7")}`); // 12.7 is 12.7
// console.log(`12.7 is ${parseFloat("12.7")}`); // 12.7 is 12.7
// console.log(`"12.7whatisthis?!!" is ${parseFloat("12.7whatisthis?!!")}`); // "12.7whatisthis?!!" is 12.7    
// console.log(`"0xF" is ${parseInt("0xF")}`); // "0xF" is 15
// console.log(`"F" base 16 is ${parseInt("F", 16)}`); // "F" base 16 is 15
// console.log(`(1).toString() is ${(1).toString()}`); // (1).toString() is 1
// console.log(`(2).toFixed(2) is ${(2).toFixed(2)}`); // (2).toFixed(2) is 2.00

// //watch out for leading zeros for base 8 (octal)
//console.log("watch out for leading zeros for base 8 (octal):");
// console.log(`"017" is ${parseInt("017")}`); // "017" is 15 in non-strict mode, 17 in strict mode
// console.log("parse octal with parseInt");
// console.log(parseInt("17", 8)); // 15
