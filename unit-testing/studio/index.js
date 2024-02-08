let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(n){
        // if(n%2 === 0 && n%3 === 0 && n%5 === 0) {
        //     return 'LaunchCode Rocks!'; 
        // }
        // if(n%2 === 0 && n%3 === 0) {
        //     return 'LaunchCode!'; 
        // }
        // if(n%3 === 0 && n%5 === 0) {
        //     return 'Code Rocks!'; 
        // }
        // if(n%2 === 0 && n%5 === 0) {
        //     return 'Launch Rocks! (CRASH!!!!)'; 
        // }
        // if(n%2 === 0) {
        //     return 'Launch!'; 
        // }
        // if(n%3 === 0) {
        //     return 'Code!'; 
        // }
        // if(n%5 === 0) {
        //     return 'Rocks!'; 
        // }
        // if(n%2 !== 0 && n%3 !== 0 && n%5 !== 0) {
        //     return 'Rutabagas! That doesn\'t work.'; 
        // }

        // refactoring for bonus mission
        const logicObj = {
            2: "Launch",
            3: "Code",
            5: "Rocks"
        };
        let outputString = "";
        for (let divisor in logicObj) {
            if (n % divisor == 0) {
                (divisor == 5 && outputString) && (outputString += " ");
                outputString += logicObj[divisor];
            }
        }
        outputString += outputString ? "!" : "Rutabagas! That doesn't work.";
        (outputString === 'Launch Rocks!') && (outputString += ' (CRASH!!!!)');
        return outputString;
    } 
};

module.exports = launchcode;

