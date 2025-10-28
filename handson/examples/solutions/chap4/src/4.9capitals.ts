
//Create a map between countries and their capital cities. Look up
//and display some capitals of Countries
const capitals = new Map<string, string>([
   ["England", "London"],
   ["France", "Paris"],
   ["Germany", "Berlin"],
   ["Spain", "Madrid"],
   ]);
   // Destructuring
   for (const[country, capital] of capitals) {
   console.log(`The capital of ${country} is ${capital}`);
   }