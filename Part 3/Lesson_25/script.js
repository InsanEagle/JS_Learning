// let const
'use strict';

function makeArrayWithVar() {
    var items = [];

    for (var i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item)
    }

    return items;
}

var arr = makeArrayWithVar();

arr[1]();
arr[3]();
arr[6]();
arr[9]();

function makeArrayWithLet() {
    var items = [];

    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item)
    }

    return items;
}

var secondarr = makeArrayWithLet();

secondarr[1]();
secondarr[3]();
secondarr[6]();
secondarr[9]();