'use strict';
// if .. else ..

if (true) {     
    console.log("True");
}

if (false) {
    console.log("True");
} else {
    console.log("False");
}

if ("3" === 3) {
    console.log("'3' === 3");
} else if (5 === "5") {
    console.log("5 === '5'");
} else {
    console.log("Wow");
} 

// (condition) ? value if true : value if false - conditional (ternary) operator

(true && false) ? console.log("It is true") : console.log("It is false");

/* switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
} */

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}