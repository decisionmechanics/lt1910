//Convert a CSV Command Separated Variable string
//to a TSV Tab Separated Variable string using split and join 
let csv = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
let tsv = csv.split(",").join("\t");
console.log(tsv);

//Convert a TSV Command Separated Variable string
//to a CSV Tab Separated Variable string using split and join
let tsv2 = "Mercury\tVenus\tEarth\tMars\tJupiter\tSaturn\tUranus\tNeptune";
let csv2 = tsv2.split("\t").join(",");
console.log(csv2);

//Convert a CSV Command Separated Variable string
//to a TSV Tab Separated Variable string using replace
let csv3 = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
let tsv3 = csv3.replace(/,/g, "\t");
console.log(tsv3);

//Convert a TSV Command Separated Variable string
//to a CSV Tab Separated Variable string using replace
let tsv4 = "Mercury\tVenus\tEarth\tMars\tJupiter\tSaturn\tUranus\tNeptune";
let csv4 = tsv4.replace(/\t/g, ",");
console.log(csv4);
