'use strict';

let money = +prompt("Ваш бюджет на месяц?", "100500"),
    time = prompt("Введите дату", "YYYY-MM-DD");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    var expenseItem = prompt("Введите обязательную статью расходов" +
            "в этом месяце", ""),
        cost = prompt("Во сколько обойдется?", "");
    if ((typeof (expenseItem)) === "string" && (typeof (expenseItem)) != null &&
        (typeof (cost)) != null && expenseItem != '' && cost != '' &&
        expenseItem.length < 50) {
        console.log("Key added");
        appData.expenses[expenseItem] = cost;
    } else {
        i--;
        console.log("You entered wrong data. Try again");
    }
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

appData.moneyPerDay = appData.moneyData / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay < 2000 && appData.moneyPerDay >= 100) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}


// Сколько типов данных существует в JS?
// 6 (Number, String, Symbol, null, undefined, Object, boolean)

// Как вывести информацию в консоль?
// console.log()

// Какая функция операторов || и &&?
// logical "or" and logical "and"