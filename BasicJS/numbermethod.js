let number = 230.222;

console.log(number.toFixed(1));

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

let min = 0;
let max = 1;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
