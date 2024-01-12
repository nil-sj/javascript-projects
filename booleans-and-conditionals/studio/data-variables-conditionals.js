// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus	= "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut count is OK.");
} else {
    console.log("Astronaut count is not OK [more than 7]!");
    preparedForLiftOff = false;
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronaut status is OK.");
} else {
    console.log("Astronaut status is not OK [not ready]!");
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log("Total mass in KG is OK [less than maximum mass limit].");
} else {
    console.log("Total mass in KG is not OK [equal or more than maximum mass limit]!");
    preparedForLiftOff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < -300 || fuelTempCelsius > -150) {
    console.log("The fuel temparature is beyond the OK range!");
    preparedForLiftOff = false;
} else {
    console.log("The fueld temparature is OK [within the OK range].");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === 100) {
    console.log("The fuel level is OK [100%].")
} else {
    console.log("The fuel level is not OK [not 100%]!");
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("The weather status is OK [clear]!");
} else {
    console.log("The weather status is not OK [not clear]!");
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff) {
    console.log("\nAll systems are a go! Initiating space shuttle launch sequence.");
    console.log("---------------------------------------------------------------");
    console.log("Date: ", date, "\nTime: ", time, "\nAstronaut Count: ", astronautCount);
    console.log("Crew Mass: ", crewMassKg, " kg\nFuel Mass: ", fuelMassKg, " kg \nShuttle Mass: ", shuttleMassKg, " kg\nTotal Mass: ", totalMassKg, " kg");
    console.log("Fuel Temparature: ", fuelTempCelsius, " °C\nWeather Status: ", weatherStatus);
    console.log("---------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
    console.log("The launch operation has to be SHUT DOWN!");
}