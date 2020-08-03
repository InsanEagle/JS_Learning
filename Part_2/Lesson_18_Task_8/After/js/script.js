'use strict';

let money, time;

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expenseItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


expenseItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "100500");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "100500");
    }

    while (time.match(/\d\d\d\d-\d\d-\d\d/) == null) {
        time = prompt("Введите дату в нужном формате", "YYYY-MM-DD");
    }

    appData.moneyData = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear(); // with <input> better use attrubute value 
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expenseItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expenseItemBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === "string" &&
            (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' &&
            a.length < 50) {
            console.log("Key added");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("You entered wrong data. Try again");
        }
    }
    expensesValue.textContent = sum;
    appData.expensesSum = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        var opt = optionalExpensesItem[i].value;
        if (typeof (opt) != null && opt != "" &&
            typeof (opt) === "string" && opt.length < 50) {
            console.log("Key added");
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        } else {
            console.log("You entered wrong data. Try again");
        }
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.moneyData != undefined && appData.expensesSum != undefined) {
        appData.moneyPerDay = ((appData.moneyData - appData.expensesSum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay >= 100) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function () { //input works with every changed symbol
    for (let i = 1; i < 2; i++) {
        let items = incomeItem.value;
        if (typeof (items) != null && items != "" &&
            typeof (items) === "string" && items.length < 50) {
            console.log("Item added");
            appData.income = items.split(", ");
            incomeValue.textContent = appData.income;
        } else {
            console.log("You entered wrong data. Try again");
        }
    }
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }

});

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false,
    income: []
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