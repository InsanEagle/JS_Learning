'use strict';

let money = prompt("Ваш бюджет на месяц?", "100500"),
    time = prompt("Введите дату", "YYYY-MM-DD");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var expenseItem = prompt("Введите обязательную статью расходов" +
        "в этом месяце", ""),
    cost = prompt("Во сколько обойдется?", "");

appData.expenses[expenseItem] = cost;

//let a = expenseItem; - save first key name

expenseItem = prompt("Введите обязательную статью расходов" +
    "в этом месяце", "");
cost = prompt("Во сколько обойдется?", "");

appData.expenses[expenseItem] = cost;

//console.log(appData.expenses[expenseItem]);  |
//console.log(appData.expenses[a]);            |  - several tests 
//console.log(appData.expenses[expenseItem]);  |

let answer = alert(money / 30);