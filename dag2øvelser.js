/////////////////////////////////
console.log("Øvelse 1:");

var navn = "Jake";
var alder = 21;

console.log("Mit navn er", navn, "og jeg er", alder, "år gammel.");
console.log("____________________________");
/////////////////////////////////
console.log("Øvelse 2:");

var moms = 1.25;
var pris_uden_moms = 400;
var pris_med_moms = moms * pris_uden_moms;

console.log("Pris med moms:", pris_med_moms);

var pris_uden_moms_02 = pris_med_moms / moms;

console.log("Pris uden moms:", pris_uden_moms_02)
console.log("____________________________");
/////////////////////////////////
console.log("Øvelse 3:");

var første = 20;
var anden = 10;
var byt;

console.log("Før byt", '\n', "Første:", første, '\n', "Anden:",anden);
byt = første;
console.log("Efter byt:", '\n', "Første:", første = anden, '\n', "Anden:",anden = byt);
console.log("____________________________");
//////////////////////////////////
console.log("Øvelse Arrays 1.1:");

var cars = ["Saab", "Volvo", "BMW"]

console.log(cars);
console.log("____________________________");
//////////////////////////////////
console.log("Øvelse Arrays 1.2:");

console.log(cars[1]);
console.log("____________________________");
//////////////////////////////////
console.log("Øvelse Arrays 1.3:");

cars[0] = "Opel";

console.log(cars);
console.log("____________________________");
//////////////////////////////////
console.log("Øvelse Arrays 1.4:");

console.log(cars.length);
console.log("____________________________");
//////////////////////////////////
console.log("Øvelse Arrays 1.5:");

cars[cars.length] = "Mercedes";

console.log(cars);
console.log("____________________________");
//////////////////////////////////
console.log("Øvelse Arrays 2:");

var personer = [
    ["John","Jane","Meredith"],
    ["Sheppard","Doe","Mckay"],
    ["30","24","41"]
];

console.log(personer);

for (personer.lenght)
{

}