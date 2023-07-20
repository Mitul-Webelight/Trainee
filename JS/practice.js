// const user = {
//   firstName: "Mitul",
//   lastName: "Kasundra",
//   age: 22,
// };

// console.log(user.firstName);

// let user = {
//   name: "John",
//   age: 30,
// };

// for (let value of Object.values(user)) {
//   console.log(value);
// }

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
// );

// console.log(doublePrices.banana);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));

// let user = {
//   name: "John",
//   age: 30,
// };

// function count(obj) {
//   return Object.keys(obj).length;
// }

// console.log(count(user));

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(pow(2, 1));

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 8));

// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }

// console.log(pow(2, 8));

// setTimeout((sayHi) => {
//   console.log((sayHi = "sayHi"));
// }, 2000);

// function sayHi() {
//   console.log("Hello");
// }

// setTimeout(sayHi, 1000);

// setTimeout((pharse, who) => {
//     console.log(pharse = "sayHi", who = "me!");
// }, 2000);

// let sayHi = setTimeout(() => console.log("never happens"), 1000);
// console.log(sayHi);

// clearTimeout(sayHi);
// console.log(sayHi);

// let timerId = setInterval(() => console.log("tick"), 2000);

// setTimeout(() => {
//     console.log("stop");
//     clearInterval(timerId);
// }, 6000);

// let timerId = setTimeout(function tick() {
//   console.log("tick");
//   timerId = setTimeout(tick, 1000);
// }, 1000);

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start);

//   if (start + 100 < Date.now()) console.log(times);
//   else setTimeout(run);
// });

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function () {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(1, 10);

// function slow(x) {
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     let result = func(x);

//     cache.set(x, result);
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1));
// console.log("Again: " + slow(1));

// console.log(slow(2));
// console.log("Again: " + slow(2));

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     console.log("Called with " + x);
//     return x * this.someMethod();
//   },
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func(x);
//     cache.set(x, result);
//     return result;
//   };
// }

// console.log(worker.slow(1));

// worker.slow = cachingDecorator(worker.slow);

// console.log(worker.slow(2));
