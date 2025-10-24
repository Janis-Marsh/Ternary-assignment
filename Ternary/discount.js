// Discount Eligibility

const prompt = require('prompt-sync')();
let amount = parseInt(prompt("Enter amount spent "))
let result = (amount>=100) ? console.log("10% discount") : console.log("No discount")