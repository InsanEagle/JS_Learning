'use strict';

// Object-oriented programming

let vehicle = {
    type: "car",
    capacity: 300,
    power: 100
};

let plane = {
    type: "plane"
};

plane.__proto__ = vehicle;
console.log(plane);
console.log(plane.power);

