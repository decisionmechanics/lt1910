// generate a simple grep utility.
// - Read two arguments from the command line—some search text
// and a file path
// - Read the file in as a string
// - Split the string on new lines
// - For each line, check if the search text is contained in the line
// - Display lines that contain the search string
// • Remember to handle exceptions. They are common when working
// with files.
// • Try it out on a text file
// • Try reading from a file path that doesn’t exist. Then write to a file on
// a nonexisting folder path. Were the exceptions trapped?
import { readFileSync } from "node:fs";

function grep(searchText: string, filePath: string): void {
    try {
        const text = readFileSync(filePath, "utf-8");
        const lines = text.split(/\r?\n/);
        let count = 0;
        for (const line of lines) {
            if (line.includes(searchText)) {
                console.log("\n" + count++ + ":" +  line);
            }
        }
    } catch (err) {
        if (err instanceof Error) { console.error(err.message); }
    }
}

const args = process.argv.slice(2);
if (args.length !== 2) {
    console.error("Usage: bun run src/9.1grep.ts <searchText> <filePath>");
} else {
    const [searchText, filePath] = args;
    grep(searchText, filePath);
}

// at the terminal prompt, try it out with
// cd ~/course/handson/solutions/chap9
// tsc
// bun run src/9.1grep.ts vampire /home/user/course/data/dracula.txt
// bun run src/9.1grep.ts vampire wrongfile.txt  // should show an error message

// you may need to run npm install @types/node --save-dev
// you may need to copy course/data/dracula.txt to your src folder
// or use an absolute path like 
// /home/user/course/data/dracula.txt