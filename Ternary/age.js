// Age Category

const prompt = require('prompt-sync')();
let age = parseInt(prompt("Enter age "))
let result = (age<13) ? console.log("Child") :
(age<20) ? console.log("Teen") : 
(age<60) ? console.log("Adult") :
console.log("Senior")