'use strict';

// Context

function showThis() {
    console.log(this);
}

// function showThisTwo(a, b) { 
//     console.log(this);
//     function sum () {
//         console.log(this);
//         return this.a + this.b; // Doesn't work because can't find 'this' in this context
//     }
//     console.log(sum());
// }

function showThisTwo(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b; // Do work because of 
    }
    console.log(sum());
}

showThis();
showThisTwo(4, 5);
showThisTwo(5, 5);

let obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);

        function shout() {
            console.log(this);
        }
    }
};
obj.sum();

let user = {
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number) {
    return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
});

// Contexts of this
// 1) as function - undefind/window
// 2) as method - parent object
// 3) as constructor(new) - new object
// 4) as bind(smtng) - smtng 
//   as call, apply