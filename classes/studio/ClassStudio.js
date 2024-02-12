//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    average() {
        let averageScore = 0, totalScore = 0, count = 0;
        this.scores.forEach(score => {
            totalScore += score;
            count++;
        });
        averageScore = Math.round(totalScore / count * 10)/10;
        return averageScore;
    }
    status(avgScore = this.average()) {
        let status = '';
        if (avgScore >= 90) {
            status = 'Accepted';
        } else if (avgScore >= 80 && avgScore < 90) {
            status = 'Reserve';
        } else if (avgScore >= 70 && avgScore < 80) {
            status = 'Probationary';
        } else {
            status = 'Rejected';
        }
        return status;
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bear);
console.log(maltese);
console.log(gator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bear.addScore(83);
console.log(bear.scores);

console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let numAdditionalTests = 0;
while (gator.status() !== 'Reserve') {
    gator.addScore(100);
    numAdditionalTests++;
}

console.log(`After ${numAdditionalTests} additional tests with perfect score, ${gator.name} acquired a status of ${gator.status()}`);
console.log(`Now, the gator's scores are: [${gator.scores}] with an average score of ${gator.average()}%.`);