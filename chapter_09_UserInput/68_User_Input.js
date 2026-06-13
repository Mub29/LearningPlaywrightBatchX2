//const prompt = require('prompt-sync')(); 
// this needs to run command npm install prompt-sync
let num = Number(prompt("Enter a number: "));
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}