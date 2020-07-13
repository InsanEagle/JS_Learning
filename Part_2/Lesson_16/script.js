'use strict';

// Get elements

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

box.style.backgroundColor = "blue";
btn[1].style.borderRadius = "100%";

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = "blue";    
// }

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = "blue";
});

console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart);
console.log(oneHeart);



