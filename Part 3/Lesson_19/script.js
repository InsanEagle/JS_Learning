'use sctrict';
// Timeouts and animations

// let timerId = setTimeout(sayHello, 3000); -- One time 
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000); -- Many times
// // clearTimeout(timerId); 

// function sayHello() {
//     // alert('Hello World!');
//     console.log('Hello World!');
// }

// let timerId = setTimeout(function log() { -- Starting counting interval since function is done
//     console.log('Hello World!');
//     setTimeout(log, 2000);
// }) 

let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }


}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
    if (event.target && event.target.classList.contains('first')) {
        console.log('OMG');
    }
    if (event.target && event.target.matches('button.first')) {
        console.log('WOW');
    }
});