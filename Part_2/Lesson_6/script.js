// Operators (except '+', '-', '*', '/')

let a = 10,
    b = 10,
    c = 10,
    d = 10;

// 1. ++ - increment
console.log(++a); // prefix form (calculation before output)
console.log(b++); // postfix form (output then calculation) 


// 2. -- decrement
console.log(--c); // prefix form (calculation before output)
console.log(d--); // postfix form (output then calculation) 

// 3. % - eq 'mod'
console.log(10%3);

// 4. == and === - Not strict equality and strict equality
console.log("10" == 10);
console.log("10" === 10);

// 5. && - logical 'and'
console.log(true && true);
console.log(true && false);
console.log(false && false);

// 6. || - logical 'or'
console.log(true || true);
console.log(true || false);
console.log(false || false);

// 7. ! - logical 'not'
console.log(!true && true);
console.log(true && !false);
console.log(!false || false);

