'use strict';

// Cycles

// 1. while
let a = 10;
while (a <= 20) {
    console.log(a);
    a++;
}

// 2. do .. while 
let b = 10;
do {
    console.log(b);
    b++;
} while (b<=20);

// 3. for
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 4. using break and continue

for (let i = 1; i <= 20; i++) {
    if (i%2==0 && i>14) {
        break;
    }
    if (i<10) {
        continue;
    }
    console.log(i);
}