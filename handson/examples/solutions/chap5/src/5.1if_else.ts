//Set a celsius variable and use it to display if water would be
//solid, liquid or gaseous at that celsius.
const celsius = 25; // celsius in degrees Celsius

if (celsius <= 0) {
    console.log("At this celsius, water is solid (ice).");
} else if (celsius > 0 && celsius < 100) {
    console.log("At this celsius, water is liquid.");
} else {
    console.log("At this celsius, water is gaseous (steam).");
}

//You can change the celsius variable to test different outputs
//For example:
// const celsius = -5; // At this celsius, water is solid (ice).
// const celsius = 50; // At this celsius, water is liquid.
// const celsius = 105; // At this celsius, water is gaseous (steam).
