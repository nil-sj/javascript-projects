const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    test("returns 'num is less than 5.' when num < 5.", function(){
        let output = checkFive(3);
        expect(output).toBe("3 is less than 5.");
    });
    test("returns 'num is greater than 5.' when num > 5.", function(){
        let output = checkFive(8);
        expect(output).toBe("8 is greater than 5.");
    });
    test("returns 'num is equal to 5.' when num is 5.", function(){
        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });
});