const rps = require('../RPS.js');

describe("RPS Test", function () {
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
        let output = rps.whoWon('rock', 'paper');
        expect(output).toBe('Player 2 wins!');
    });
    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = rps.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
        let output = rps.whoWon('scissors','rock');
        expect(output).toBe("Player 2 wins!");
    });
    test("returns 'Player 1 wins!' if P1 = paper & P2 = rock", function () {
        let output = rps.whoWon('paper', 'rock');
        expect(output).toBe('Player 1 wins!');
    });
    test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function(){
        let output = rps.whoWon('scissors','paper');
        expect(output).toBe("Player 1 wins!");
    });
    test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors", function(){
        let output = rps.whoWon('rock','scissors');
        expect(output).toBe("Player 1 wins!");
    });
    test("returns 'Invalid Entry!' if any argument is not valid [i.e., other than 'rock', 'paper', 'scissors']", function(){
        let output = rps.whoWon('stone','scissors');
        expect(output).toBe("Invalid Entry!");
    });
});