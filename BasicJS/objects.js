// let myBook = {
// title: '1984',
// author: 'George Orwell',
// pageCount: 326
// }
// myBook.title = 'Animal Farm'
// console.log(`${myBook.title} by ${myBook.author}`)

let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};
let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723,
};
let getSummary = function (book) {
  console.log(`${book.title} by ${book.author}`);
};

getSummary(otherBook);
// getSummary(myBook);

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9),
  };
};
let temps = convertFahrenheit(74);
console.log(temps);
// https://github.com/Mitul-Webelight/Test.git 
//glpat-XFf7BSwZUnn3CzBo7zVJ