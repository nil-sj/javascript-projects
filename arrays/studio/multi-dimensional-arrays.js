let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = food.split(',');
let equipmentCabinet = equipment.split(',');
let petsCabinet = pets.split(',');
let sleepAidsCabinet = sleepAids.split(',');

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
userInput = Number(input.question("Select a cabinet (0-3): "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userInput < 0 || userInput >= cargoHold.length) {
    console.log(`You have entered ${userInput} - which is invalid. It must be betweeen 0 and ${cargoHold.length - 1}.`);
} else {
    console.log(`The contents of the selected cabinet at index '${userInput}' are: ${cargoHold[userInput]}.`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
const newUserInputNum = Number(input.question("Select a cabinet (0-3): "));
const userInputItem = input.question("Enter an item to be checked: ");
if (newUserInputNum < 0 || newUserInputNum >= cargoHold.length) {
    console.log(`You have entered ${newUserInputNum} - which is invalid. It must be betweeen 0 and ${cargoHold.length - 1}.`);
} else {
    if (cargoHold[newUserInputNum].includes(userInputItem)) {
        console.log(`Yes, the cabinet contains: ${cargoHold[newUserInputNum]}. So, the item ${userInputItem} was found in it.`);
    } else {
        console.log(`No, the cabinet contains: ${cargoHold[newUserInputNum]}. So, I am afraid, the item ${userInputItem} was not found in it.`);
    }
}