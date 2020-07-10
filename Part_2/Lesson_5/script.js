'use strict';
// User Interactions

// 1. console.log() - Console output
console.log("Hello user!");

// 2. alert() - Modal window with "OK" button
alert("Interesting...");

// 3. confirm() - Modal window with "OK" and "Cancel" buttons which mean "true" and "false"
let ans = confirm("Did you understand this thing?");
console.log(ans);

// 4. prompt(title, [default]) - Modal window with input (always string)
let whatever = prompt("Type your age", ""); // Always let default for IE
console.log(whatever);
console.log(typeof(whatever));
