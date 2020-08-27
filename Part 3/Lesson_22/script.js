'use strict';

// Constructors and classes

// ES5 Standart

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// User.prototype.exit = function(name) {
//     console.log('User "' +  this.name + '" is left');
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);  
// console.log(alex);

// ivan.exit();

// ES6 Standart

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`User \"${this.name}\" is left`);
    }
}
let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();
ivan.hello();