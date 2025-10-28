
//To create modules, we create a new TS file and add code
//Anything we want to make available outside the module we mark with the exportkeyword

const KILOMETERS_PER_MILE = 1.6;
export function milesToKilometers(miles: number): number { return miles * KILOMETERS_PER_MILE; }
export function kilometersToMiles(kilometers: number): number { return kilometers/ KILOMETERS_PER_MILE; }
//Both milesToKilometers and kilometersToMiles can 
//be referenced from outside the module.
//However, KILOMETERS_PER_MILE is private to the module.