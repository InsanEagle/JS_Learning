'use strict';

// Breakpoints

function hello() {
    console.log("Hello World!");
}

hello();

function hi() {
    console.log("Hello World!");
}

hi();

let arr = [1, 15, 4, 30, 42],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log(arr);