// Code your selectRandomEntry function here:

function selectRandomEntry(IDarray) {
  let randomID;
  let randomIndex = Math.floor(Math.random()*(IDarray.length));
  randomID =  IDarray[randomIndex];
  return randomID;
}

// Code your buildCrewArray function here:

let idNumbers = [291, 414, 503, 599, 796, 890];

let mySelectedIDs = [];
let count = 0;


do {
  let pickedID = selectRandomEntry(idNumbers);
  if (!mySelectedIDs.includes(pickedID)) {
    mySelectedIDs.push(pickedID);
    count++; 
  }
} while (count < 3)

function buildCrewArray(randomSelection, candidates) {
  let crew = [];
  // candidates.forEach(c => randomSelection.includes(c.astronautID) && crew.push(c));
  for (let i=0; i < candidates.length; i++) {
    if (randomSelection.includes(candidates[i].astronautID)) {
      crew.push(candidates[i]);
    }
  }
  return crew;
}


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let myCrew = buildCrewArray(mySelectedIDs, animals); 
console.log(`${myCrew[0].name}, ${myCrew[1].name}, and ${myCrew[2].name} are going to space!`);