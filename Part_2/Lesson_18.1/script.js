'use sctrict';
// Mobile events + regular expressions

// touchstart - tap on object
// touchmove - touch and moving inside the object
// touchend - releasing tap from the object
// touchenter - touched outside the object and moving finger to the object
// touchleave - touched inside the object and moving finger outside the object
// touchcancel - touch doesn't register inside the object (???)

window.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector('#btn');

    btn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        console.log("Btn: touchstart");
        console.log(e.target);
        console.log(e.touches[0].target);
        console.log(e.changedTouches);
        console.log(e.targetTouches);
    });

    btn.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log("Btn: touchmove");
        console.log(e.touches[0].pageX);
    });

    btn.addEventListener('touchend', function (e) {
        e.preventDefault();
        console.log("Btn: touchend");
    });

    btn.addEventListener('touchenter', function (e) {
        e.preventDefault();
        console.log("Btn: touchenter");
    });

    btn.addEventListener('touchleave', function (e) {
        e.preventDefault();
        console.log("Btn: touchleave");
    });

    btn.addEventListener('touchcancel', function (e) {
        e.preventDefault();
        console.log("Btn: touchcancel");
    });
});
//-------------------------------------------------------

// new RegExp('pattern', 'flags');
// /pattern/flags

let ans = prompt("Введите ваше имя", '');

let reg = /n/gi;

// first finded position
// console.log(ans.search(reg));

// array with many parameters
console.log(ans.match(reg));

// flags
// i - any register
// g - global
// m - multilinear
// . - any symbol

// \d - any number \D - any NOT number
// \w - any word   \W - any NOT word
// \s - space      \S - NOT space

// \ - shielding backslash

let pass= prompt('Введите пароль: ');

console.log(pass.replace(/./g, "*"));
alert("12-34-56".replace(/-/g, ";"));

console.log(reg.test(ans));

let str = "My name is R2D2";

console.log(str.match(/\w\d\w\d/i));