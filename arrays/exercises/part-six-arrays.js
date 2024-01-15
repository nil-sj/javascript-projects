//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1);
console.log(table);
table.push(element2);
console.log(table);
table.push(element26);
console.log(table);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1], table[1][1]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2], table[1][0], table[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. 
// Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let geographyPiece = 
[
    [
        ['Russia','17.1 mil sqkm', 'Moscow'], 
        ['China','9.6 mil sqkm', 'Beijing'], 
        ['India','3.3 mil sqkm', 'New Delhi']
    ],
    [
        ['Canada','10.0 mil sqkm', 'Ottawa'], 
        ['USA','9.9 mil sqkm', 'Washington D.C.'], 
        ['Mexico','2.0 mil sqkm', 'Mexico City']
    ],
    [
        ['Brazil','8.5 mil sqkm', 'Brasilia'], 
        ['Argentina','7.7 mil sqkm', 'Buenos Aires'], 
        ['Peru','1.3 mil sqkm', 'Lima']
    ]
];
// The above is an array of three continents' three biggest countries's information pertaining to country name, area in sq. km, and the name of the capital city.
console.log(geographyPiece[1]);
console.log(geographyPiece[2][0]);
console.log(geographyPiece[0][1][2]);