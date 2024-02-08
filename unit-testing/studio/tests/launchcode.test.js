// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test ("should have a property 'organization' with a value 'nonprofit'", function(){
    expect(launchcode.organization).toBe('nonprofit');
  });
  test ("should have a property 'executiveDirector' with a value 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  test ("should have a property 'percentageCoolEmployees' with a value 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test ("should have a property 'programsOffered' with an array that holds 3 programs: 'Web Development', 'Data Analysis', and 'Liftoff'", function(){
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('Liftoff');
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test ("should have a method that returns 'Launch!' when input num is divisible by only 2", function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });
  test ("should have a method that returns 'Code!' when input num is divisible by only 3", function(){
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });
  test ("should have a method that returns 'Rocks!' when input num is divisible by only 5", function(){
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });
  test ("should have a method that returns 'LaunchCode!' when input num is divisible by 2 AND 3", function(){
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });
  test ("should have a method that returns 'Code Rocks!' when input num is divisible by 3 AND 5", function(){
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });
  test ("should have a method that returns 'Launch Rocks! (CRASH!!!!)' when input num is divisible by 2 AND 5", function(){
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });
  test ("should have a method that returns 'LaunchCode Rocks!' when input num is divisible by 2, 3, AND 5", function(){
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });
  test ("should have a method that returns 'Rutabagas! That doesn't work.' when input num is NOT divisible by 2, 3, or 5", function(){
    expect(launchcode.launchOutput(11)).toBe("Rutabagas! That doesn't work.");
  });

});