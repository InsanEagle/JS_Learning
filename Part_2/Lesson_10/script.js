'use strict';
// Functions 

function showMessage (text) {
    alert(text);
}
showMessage ("Hello world!");

function localVar () {
    let a = 10;
}
localVar();
//console.log(a); // Local var can't seen outside the function

let b = 10;
function globalVar() {
    b = 100;
}
globalVar ();
console.log(b); // Global var can be used inside the function

let c = 10;
function circuitFunc () {
    let c = 20;
    console.log(c);
}
circuitFunc ();
console.log(c);

function calc (a,b) {
    return a + b;
}
console.log(calc(3,4));

function returnFunc () {
    let s = 200;
    return s;
}
console.log(returnFunc());

// Function declaration - can be used before its declaration
funcDeclaration();
function funcDeclaration () {console.log("No error");}

// Function expression - can't be used before its declaration
// funcExprassion(); // Error 
let funcExprassion = function () {console.log("No error");};

// Arrow function 
let funcArrow = (x,y) => x+y;
console.log(funcArrow(2,10));

// Methods and properties 
let str = "something";
console.log(str.length);
console.log(str.toUpperCase());
let num = "42.323sd3";
console.log(Math.round(num));
console.log(parseInt(num));
console.log(parseFloat(num));



