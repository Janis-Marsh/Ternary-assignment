// Weekend check

const prompt = require('prompt-sync')();
let day = prompt("What day is it ")
let result = (day==="Saturday" || day=== "Sunday") ? console.log("Weekend") : console.log("Weekday")