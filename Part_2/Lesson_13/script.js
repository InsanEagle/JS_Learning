'use strict';

// Arrays

// let arr = ["first", 2, 3, "four", 5];
// // arr[99] = 99; // creates 94 empty elements between 4 and 99 elements
// // arr.length; // 100 because it takes last index and incriments it
// // arr.pop();
// // arr.push("5");
// // arr.shift();
// // arr.unshift("1");

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// // index = key
// for (const key in mass) {
//     console.log(key);
// }

// for (const key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["abc", "hello", "bca"],
//     i = arr.join(', ');
// console.log(arr);
// console.log(i);

let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum (a,b) {
    return a-b;
}
console.log(arr);

