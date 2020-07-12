'use strict';

// Objects

let options = {
    width: 1024,
    height: 720,
    name: "test"
};

console.log(options.width);
options.bool = true;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (const key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);