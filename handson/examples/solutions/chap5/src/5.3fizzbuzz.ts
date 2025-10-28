//Write code to display all the numbers from 1 to 100, with three exceptions
//For numbers divisible by three, and not five, display “Fizz” instead of the number
//For numbers divisible by five, and not three, display “Buzz” instead of the number
//For numbers that are divisible by three and five, display “FizzBuzz” instead of the number
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//[info] License: MIT, URL:
//https://github.com/github-copilot/code_referencing?cursor=18f6745c72371e6edf0381b293d71ad1,44482b80cd93232ed0a62c15ce03fb2e,840cf6e6594c948431b077a035c54e4c