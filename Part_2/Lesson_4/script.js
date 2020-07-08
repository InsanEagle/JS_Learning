'use strict';

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let something;
console.log(something); // undefined

//console.log(nothing)  // null (Error)

console.log(4/0); // Infinity
console.log("string"*5); // NaN

let computer = {
    processor: "Intel",
    price: 4000,
    isAviable: true
};
console.log(computer.price);
console.log(computer["isAviable"]);

let arr = [1,2,"string",true];
console.log(arr[2]);