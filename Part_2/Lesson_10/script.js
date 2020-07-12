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
};

function chooseExpenses() {
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
}

chooseExpenses();

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

function detectDayBudget() {
    appData.moneyPerDay = (appData.moneyData / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay < 2000 && appData.moneyPerDay >= 100) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}
detectLevel();

// Сколько типов данных существует в JS?
// 6 (Number, String, Symbol, null, undefined, Object, boolean)

// Как вывести информацию в консоль?
// console.log()

// Какая функция операторов || и &&?
// logical "or" and logical "and"

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений", ""),
            percent = +prompt("Под какой процент", "");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
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
}

chooseOptExpenses();

// Что значит () после названия функции?
// Аргументы функции