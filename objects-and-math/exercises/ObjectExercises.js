let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let weaterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
let listOfIDs = [];

function generateRandomInt(lowerBound, upperBound) {
   let randomInt;
   randomInt = Math.round(lowerBound + Math.random() * (upperBound - lowerBound));
   return randomInt;
}

function generateUniqueID(startID, endID, IDarray) {
   let uniqueID;
   do {
      uniqueID = generateRandomInt(startID, endID);
   } while (IDarray.indexOf(uniqueID) !== -1)
   IDarray.push(uniqueID);
   return uniqueID;
}

// // testing my generate random int function
// console.log(generateRandomInt(2,5));

// // testing my uniqueId function
// for (let i = 0; i < 5; i++) {
//    console.log(generateUniqueID(1, 10, listOfIDs));
// }
// console.log(listOfIDs);

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dog, weaterBear];

crew.forEach(crewMember => crewMember.astronuatID = generateUniqueID(1, 10, listOfIDs));

// // testing my assignment of astronuatIDs to all crew members
// console.log(crew);

crew.forEach(crewMember => crewMember.move = () => Math.floor(Math.random() * 11));

// // testing my assignment of move function to all crew members
// console.log(crew[generateRandomInt(0,crew.length-1)].move());

// Print out the relevant information about each animal.

function crewReports({ name, species, age, mass, astronuatID: crewID }) {
   return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${crewID}.`;
}

console.log("\n---------------------------: logging in console - the crew reports :---------------------------\n");
crew.forEach(crewMember => console.log(crewReports(crewMember)));

// Start an animal race!

function fitnessTest(crewArray) {
   let result = [];
   crewArray.forEach(crewAnim => {
      let steps = 0, turns = 0;
      while (steps < 20) {
         steps += crewAnim.move();
         turns++;
      }
      result.push(`${crewAnim.name} took ${turns} turns to take 20 steps.`)
   });
   return result;
}

console.log("\n---------------------------: logging in console - the fitness test results :---------------------------\n");
fitnessTest(crew).forEach(result => console.log(result));