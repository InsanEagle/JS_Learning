// Interpolation
'use strict';

let name = "Ivan",
    age = 30,
    mail = 'mail@mail.ru';

document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail); // w\o interpolation
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`); // with interpolation

