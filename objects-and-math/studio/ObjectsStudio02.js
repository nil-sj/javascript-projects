// Code your orbitCircumference function here:

function orbitCircumference(radius) {
  let circumference = 0;
  circumference = Math.round(2 * Math.PI * radius);
  return circumference;
}

// Code your missionDuration function here:

function missionDuration(numOrbComp, orbRad = 2000, orbSpd = 28000) {
  let duration = 0;
  let distance = numOrbComp * orbitCircumference(orbRad);
  duration = Math.round(distance/orbSpd * 100)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${duration} hours to complete.\n`);
  return duration;
}

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(IDarray) {
  let randomID;
  let randomIndex = Math.floor(Math.random()*(IDarray.length));
  randomID =  IDarray[randomIndex];
  return randomID;
}

// Code your oxygenExpended function here:

function oxygenExpended(astronaut) {
  let numOfOrbits = 3;
  let duration = missionDuration(numOfOrbits, orbRad = 2400, orbSpd = 21000);
  let oxygenUsed = Math.round(astronaut.o2Used(duration)*1000)/1000;
  return `${astronaut.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`; 
}

// Candidate data & crew array.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 let myIndexArray = [];
 crew.forEach((crewMemeber, index )=> myIndexArray.push(index));

 console.log("\n");
 console.log(oxygenExpended(crew[selectRandomEntry(myIndexArray)]));

 let oxygenConsumptionRates = [];
 crew.forEach((crewMemeber)=> oxygenConsumptionRates.push(crewMemeber.o2Used(1)));


function minValOfArr(inputArr) {
  let min = inputArr[0];
  // inputArr.forEach(elem => min = (min > elem ? elem : min));
  for(let i = 1; i < inputArr.length; i++) {
    if(min > inputArr[i]) {
      min = inputArr[i];
    }
  }
  return min;
 }
 
let minCons = minValOfArr(oxygenConsumptionRates);

let efficientAnimal = crew[oxygenConsumptionRates.indexOf(minCons)];

console.log("\n");
console.log(oxygenExpended(efficientAnimal));