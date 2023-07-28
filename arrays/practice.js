// const myHonda = {
//   color: "red",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };
// const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// const newCar = myCar.slice(0, 2);

// console.log("myCar =", myCar);
// console.log("newCar =", newCar);
// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// myHonda.color = "purple";
// console.log("The new color of my Honda is", myHonda.color);

// console.log("myCar[0].color =", myCar[0].color);
// console.log("newCar[0].color =", newCar[0].color);

// const fruits = ["A", "B", "C", "D", "E", "F", "G"];

// console.log(fruits.slice(1, 3));
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.unshift("A"));
// console.log(fruits);

// const timestamp = 1488387600000;
// const date = moment(timestamp);
// console.log(date.format("MMMM Do, YYYY"));

// var MYAPP = {}; 
// MYAPP.num = 5;
// MYAPP.obj = {};
// MYAPP.str = "Good morning";
// MYAPP.sum = function(x, y){
//    var total = x + y;
//    return total;
// }
// MYAPP.num = MYAPP.sum(4,3);

// Initial array of numbers
let numbers = [5, 10, 15, 20, 25];

// 1. Map: Doubling all numbers
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// 2. Filter: Keeping only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 3. Reduce: Calculating the sum of all numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

// 4. Find: Finding the first number greater than 15
let firstNumberGreaterThan15 = numbers.find(num => num > 15);
console.log("First number greater than 15:", firstNumberGreaterThan15);

// 5. Sort: Sorting the numbers in ascending order
let sortedNumbersAscending = numbers.sort((a, b) => a - b);
console.log("Sorted numbers (ascending):", sortedNumbersAscending);

// 6. Some: Checking if there is at least one odd number
let hasOddNumber = numbers.some(num => num % 2 !== 0);
console.log("Has odd number:", hasOddNumber);

// 7. Every: Checking if all numbers are multiples of 5
let areAllMultiplesOf5 = numbers.every(num => num % 5 === 0);
console.log("Are all multiples of 5:", areAllMultiplesOf5);

// 8. Slice: Extracting a portion of the array
let slicedArray = numbers.slice(1, 4);
console.log("Sliced array:", slicedArray);

// 9. Concat: Concatenating two arrays
let additionalNumbers = [30, 35, 40];
let combinedArray = numbers.concat(additionalNumbers);
console.log("Combined array:", combinedArray);

// 10. Includes: Checking if the array includes a specific number
let includesNumber = numbers.includes(20);
console.log("Includes number 20:", includesNumber);
