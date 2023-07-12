// let myBook = {
// title: '1984',
// author: 'George Orwell',
// pageCount: 326
// }
// myBook.title = 'Animal Farm'
// console.log(`${myBook.title} by ${myBook.author}`)

// let myBook = {
//   title: "1984",
//   author: "George Orwell",
//   pageCount: 326,
// };
// let otherBook = {
//   title: "A Peoples History",
//   author: "Howard Zinn",
//   pageCount: 723,
// };
// let getSummary = function (book) {
//   console.log(`${book.title} by ${book.author}`);
// };

// getSummary(otherBook);
// // getSummary(myBook);

// let convertFahrenheit = function (fahrenheit) {
//   return {
//     fahrenheit: fahrenheit,
//     kelvin: (fahrenheit + 459.67) * (5 / 9),
//     celsius: (fahrenheit - 32) * (5 / 9),
//   };
// };
// let temps = convertFahrenheit(74);
// console.log(temps);

// let myAccount = {
// name: 'Mitul',
// expenses: 0,
// income: 0
// }
// let addExpense = function (account, amount) {
// account.expenses = account.expenses + amount
// console.log(account)
// }
// addExpense(myAccount, 2000)
// console.log(myAccount)

// let myAccount = {
// name: 'Mitul',
// expenses: 0,
// income: 0
// }
// let addExpense = function (account, amount) {
// account = {}
// account.age = 1
// console.log(account)
// }
// addExpense(myAccount, 2000)
// console.log(myAccount)

let myAccount = {
  name: "Mitul",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
