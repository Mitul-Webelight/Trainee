let numbers = [5, 10, 15, 20, 25];

let doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);

let firstNumberGreaterThan15 = numbers.find(num => num > 15);
console.log('First number greater than 15:', firstNumberGreaterThan15);

let sortedNumbersAscending = numbers.sort((a, b) => a - b);
console.log('Sorted numbers (ascending):', sortedNumbersAscending);

let hasOddNumber = numbers.some(num => num % 2 !== 0);
console.log('Has odd number:', hasOddNumber);

let areAllMultiplesOf5 = numbers.every(num => num % 5 === 0);
console.log('Are all multiples of 5:', areAllMultiplesOf5);

let slicedArray = numbers.slice(1, 4);
console.log('Sliced array:', slicedArray);

let additionalNumbers = [30, 35, 40];
let combinedArray = numbers.concat(additionalNumbers);
console.log('Combined array:', combinedArray);

let includesNumber = numbers.includes(20);
console.log('Includes number 20:', includesNumber);

let doubleValue = numbers.forEach(x => console.log(x * 2));

// .map() vs .foreach()
// The map method receives a function as a parameter. Then it applies it on each element and returns an entirely new array populated with the results of calling the provided function.
// the forEach() method receives a function as an argument and executes it once for each array element.However, instead of returning a new array like map, it returns undefined.
