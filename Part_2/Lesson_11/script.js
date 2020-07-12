'use strict';

// Callback-functions

function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("I am learning " + lang);
    callback();
}

// learnJS("JS", function() {
//     console.log("Я прошел этот урок");
// });

function done() {
    console.log("Я прошел этот урок");
}

learnJS("JS", done);