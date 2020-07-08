// ----------To string----------

// 1. String()
console.log(typeof(String(10)));

// 2. "" + _
console.log(typeof("" + 10));
console.log("" + false);



// ----------To number----------

// 1. Number()
console.log(typeof(Number("string")));

// 2. +_
console.log(typeof(+"string"));
console.log(+"string");
console.log(10 + +"10");

// 3. parseInt(string, radix)
console.log(typeof(parseInt("10", 10)));
console.log(Number("10") + +"10" + parseInt("10", 10));

let ans = +prompt("Hello?", ""); // "+" before function
console.log(typeof(ans));



// ----------To boolean----------

// 1. 0, "", null, undefined, NaN - always false 

let switcher = null;

if (switcher) {
    console.log("Working..")
}

switcher = 1;

if (switcher) {
    console.log("Working..")
}

// 2. Boolean()
console.log(typeof(Boolean("string")));
console.log(Boolean(10));

// 3. !!_
console.log(typeof(!!"123"));
console.log(!!10);

