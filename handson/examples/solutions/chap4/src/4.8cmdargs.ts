//Read a filename and path  from the first argument of command line and display it
import * as path from "path";
const args = process.argv.slice(2);


//Display an error if the user doesn’t pass exactly one argument
if (args.length !== 1) {
    console.error("Please provide exactly one filename as an argument.");
//else Extract and display the filename from the file path
} else {
    const filePath = args[0];
    const fileName = path.basename(filePath);
    console.log(`The file path is: ${filePath}`);
    console.log(`The filename is: ${fileName}`);
}   
//Display the full argument list for debugging purposes
console.log("Full argument list:", process.argv);
//To run this script, use terminal/shell prompt, such as: 
// cd ~course/handson/solutions/chap4
// tsc
// node dist/4.8cmdargs.ts ../../../data/4.8jokes.csv

