let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
console.log(String(num).length-1);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 345.43;
let numString = String(num);
let numDigits = 0;
if (numString.includes(".")) {
    numDigits = numString.length - 1;
} else {
    numDigits = numString.length;
}
console.log(numDigits);