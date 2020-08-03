'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "100500");
    time = prompt("Введите дату", "YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "100500");
    }
}

start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: true,
    income: [],
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            var expenseItem = prompt("Введите обязательную статью расходов" +
                    "в этом месяце", ""),
                cost = prompt("Во сколько обойдется?", "");
            if ((typeof (expenseItem)) === "string" &&
                (typeof (expenseItem)) != null &&
                (typeof (cost)) != null && expenseItem != '' && cost != '' &&
                expenseItem.length < 50) {
                console.log("Key added");
                appData.expenses[expenseItem] = cost;
            } else {
                i--;
                console.log("You entered wrong data. Try again");
            }
        }
    },
    detectDayBudget() {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay >= 100) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений", ""),
                percent = +prompt("Под какой процент", "");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses() {
        for (let i = 1; i < 4; i++) {
            var optExpenseItem = prompt("Не обязательная статья расходов", "");
            if (typeof (optExpenseItem) != null && optExpenseItem != "" &&
                typeof (optExpenseItem) === "string" && optExpenseItem.length < 50) {
                console.log("Key added");
                appData.optionalExpenses[i] = optExpenseItem;
            } else {
                i--;
                console.log("You entered wrong data. Try again");
            }
        }
    },
    chooseIncome: function() {
        for (let i = 1; i < 2; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', "");
            if (typeof (items) != null && items != "" &&
                typeof (items) === "string" && items.length < 50) {
                console.log("Item added");
                appData.income = items.split(", ");
            } else {
                i--;
                console.log("You entered wrong data. Try again");
            }
        }            
        appData.income.push(prompt("Может что-то еще?" , ""));
        appData.income.sort();
        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item, i) {
                console.log((i+1) + ": " + item);
             });
    }
};

console.log("Наша программа включает в себя данные: ");
for (const key in appData) {
    console.log(key + ": " + appData[key]);
}

// Second cycle type
// let i = 0;
// while (i < 2) {
//     var expenseItem = prompt("Введите обязательную статью расходов" +
//             "в этом месяце", ""),
//         cost = prompt("Во сколько обойдется?", "");
//     if ((typeof (expenseItem)) === "string" && (typeof (expenseItem)) !=
//         null && (typeof (cost)) != null && expenseItem != '' &&
//         cost != '' && expenseItem.length < 50) {
//         console.log("Key added");
//         appData.expenses[expenseItem] = cost;
//     } else {
//         i--;
//         console.log("You entered wrong data. Try again");
//     }
//     i++;
// }

// Third cycle type
// let i = 0;
// do {
//     var expenseItem = prompt("Введите обязательную статью расходов" +
//             "в этом месяце", ""),
//         cost = prompt("Во сколько обойдется?", "");
//     if ((typeof (expenseItem)) === "string" && (typeof (expenseItem)) !=
//         null && (typeof (cost)) != null && expenseItem != '' &&
//         cost != '' && expenseItem.length < 50) {
//         console.log("Key added");
//         appData.expenses[expenseItem] = cost;
//     } else {
//         i--;
//         console.log("You entered wrong data. Try again");
//     }
//     i++;
// } while (i < 2);

//let a = expenseItem; - save first key name

//console.log(appData.expenses[expenseItem]);  |
//console.log(appData.expenses[a]);            |  - several tests 
//console.log(appData.expenses[expenseItem]);  |


// Сколько типов данных существует в JS?
// 6 (Number, String, Symbol, null, undefined, Object, boolean)

// Как вывести информацию в консоль?
// console.log()

// Какая функция операторов || и &&?
// logical "or" and logical "and"

// Что значит () после названия функции?
// Аргументы функции

let startBtn = document.getElementById('#start'),
    budgetValue = document.getElementsByClassName('.budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('.daybudget-value')[0],
    levelValue = document.getElementsByClassName('.level-value')[0],
    expensesValue = document.getElementsByClassName('.expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('.optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('.income-value')[0],
    monthSavingsValue = document.getElementsByClassName('.monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('.yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('.expenses-item'),

    expenseItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-item'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');