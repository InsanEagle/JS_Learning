'use strict';

let listLi = document.getElementsByClassName("menu-item"),
    menu = document.querySelector('.menu'),
    secondLI = document.createElement('li'),
    title = document.getElementById('title'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    prmpt = document.querySelector('.prompt');

menu.replaceChild(listLi[1], listLi[2]);

secondLI.classList.add("menu-item");
secondLI.textContent = "Второй пункт";


menu.insertBefore(secondLI, listLi[1]);

document.body.style.backgroundImage = "url(img/apple_true.jpg)";

// Возможно ваша проблема в том, что вы пытаетесь изменить background до полной загрузки страницы.
// Попробуйте следующее:

// var ReplaceBackground = function() {
//     document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';
//  };
 
//  document.addEventListener("DOMContentLoaded", ReplaceBackground);

title.textContent = "Мы продаем только подлинную технику Apple";

let parentColumn = column[1];

parentColumn.removeChild(adv);

for (let i = 1; i < 2; i++) {
    let opinion = prompt('Как вы относитесь к технике Apple?', "");
    if (typeof (opinion) != null && opinion != "" &&
        typeof (opinion) === "string" && opinion.length < 50) {
        prmpt.textContent = opinion;
    } else {
        i--;
        console.log("You entered wrong data. Try again");
    }
}           

// Что мы получаем при помощи команды .querySelectorAll()
// Лист всех найденных элементов по заданному селектору
