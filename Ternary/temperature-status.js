// Temperature Status

const prompt = require('prompt-sync')();
let temp = parseInt(prompt("Enter temperature "))
let status = (temp>=30) ? console.log("Hot") : console.log("Normal")