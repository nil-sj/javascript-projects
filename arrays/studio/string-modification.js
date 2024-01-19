const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString = str.slice(3).concat(str.slice(0, 0+3));

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string was "${str}", and the new string is "${newString}".`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numChars = Number(input.question("Enter the number of letters to be relocated: "));
let newUserString = str.slice(numChars).concat(str.slice(0, 0+numChars));
console.log(`The original string was "${str}"\nThe user wanted to relocate ${numChars} characters.\nSo, the new string is "${newUserString}".`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let validatedNumChars = -1;
while (validatedNumChars < 0) {
    validatedNumChars = Number(input.question(`Enter a non-negative number i.e., the number of letters to be relocated (valid numbers are between 0 and ${str.length}): `));
    if (validatedNumChars > str.length) {
        console.log(`Since you entered ${validatedNumChars} which is greater than the length of the original string, we consider default of 3`);
        validatedNumChars = 3;        
    } 
}
let newValidatedUserString = str.slice(validatedNumChars).concat(str.slice(0, 0+validatedNumChars));
console.log(`The original string was "${str}"\nThe user wanted to relocate ${validatedNumChars} - validated characters.\nSo, the new string is "${newValidatedUserString}".`);