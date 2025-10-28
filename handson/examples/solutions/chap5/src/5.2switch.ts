//Write a switch statement to categorise a non-negative whole
//number into the only groups developers care about—zero, one or
//many.
const wholenum: number = 2;
switch (wholenum) {
    case 0:
        console.log("The number is zero");
        break;
    case 1:
        console.log("The number is one");
        break;
    default:
        console.log("The number is many");
        break;
}   
//Remove the break statements to see what happens.