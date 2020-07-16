'use sctrict';
// Event listener

let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function () {
//     alert("Вы нажали первую кнопку");
// };

// Newer func is current
// btn[0].onclick = function () {
//     alert("Вы опять нажали первую кнопку");
// };

// both are working
btn[0].addEventListener('click', function (event) {
    // console.log(event);
    let target = event.target;
    // target.style.display = 'none';
    console.log('Произошло событие: ' + event.type + ' На элементе: ' + target);
});

// btn[0].addEventListener('click', function() {
//     alert("Вы опять нажали первую кнопку");
// });

wrap.addEventListener('click', function () {
    let target = event.target;
    console.log('Произошло событие: ' + event.type + ' На элементе: ' + target);
});

link.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target;
    console.log('Произошло событие: ' + event.type + ' На элементе: ' + target);
});

// btn[0].addEventListener('mouseenter', function() {
//     alert("Вы навелись на первую кнопку");
// });

btn.forEach(function (item) {
    item.addEventListener('mouseleave', function() {
        console.log("Вышли!");
    });
});