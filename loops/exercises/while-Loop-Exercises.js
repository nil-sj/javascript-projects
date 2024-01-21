//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let initialFuelLevel = 0;
let numAtronautsAboard = 0;
let currentAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (initialFuelLevel <= 5000 || initialFuelLevel >= 30000 || isNaN(initialFuelLevel)) {
  if (isNaN(initialFuelLevel)) {
    initialFuelLevel = Number(input.question("Sorry, it must be a number. Enter the initial fuel level again: "));
  } else if (!initialFuelLevel) {
    initialFuelLevel = Number(input.question("Enter the initial fuel level (a number): "));
  } else if (initialFuelLevel <= 5000) {
    initialFuelLevel = Number(input.question("Sorry, it must be greater than 5000. Enter the initial fuel level again: "));
  } else if (initialFuelLevel >= 30000) {
    initialFuelLevel = Number(input.question("Sorry, it must be less than 30000. Enter the initial fuel level again: "));
  }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (numAtronautsAboard < 1 || numAtronautsAboard > 7 || isNaN(numAtronautsAboard)) {
  if (isNaN(numAtronautsAboard)) {
    numAtronautsAboard = Number(input.question("Sorry, it must be a number (an integer). Enter the number of astronauts again: "));
  } else if(!numAtronautsAboard) {
    numAtronautsAboard = Number(input.question("Enter the number of atronauts aboard (an integer): "));
  } else if (numAtronautsAboard < 1) {
    numAtronautsAboard = Number(input.question("Sorry, it must be at least 1. Enter the number of astronauts again: "));
  } else if (numAtronautsAboard > 7) {
    numAtronautsAboard = Number(input.question("Sorry, it must not be more than 7. Enter the number of astronauts again: "));
  } 
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

console.log("\nMonitoring the fuel status and altitude of the shuttle...");

let currentFuelLevel = initialFuelLevel;

while (currentFuelLevel > 100*numAtronautsAboard) {
  currentAltitude += 50;
  currentFuelLevel -= 100*numAtronautsAboard;
  console.log(`*** Current Altitude: ${currentAltitude} km | Current Fuel Level: ${currentFuelLevel}`);
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log("Displaying final status: -------------------");
let displayText = `The shuttle gained an altitude of ${currentAltitude} km.`;
if (currentAltitude >= 2000) {
  displayText += " Orbit achieved!";
} else {
  displayText += " Failed to reach orbit";
}
console.log(displayText);