// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);

// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);

// const [x, y, ...xyz] = ['My', 'Name', 'is', 'Mitul'];

// console.log(x);
// console.log(y);
// console.log(...xyz);

// const person = {
//   firstName: 'Mitul',
//   lastName: 'Kasundra',
//   age: 22,
//   city: 'Ahmedabad',
// };

// const {firstName, lastName, age, city} = person;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(city);

// const book = {
//   title: 'The Great',
//   author: 'Scott F',
//   publication: {
//     year: 1925,
//     publisher: "Charles",
//   },
//   genres: ['Fiction', 'Classic', 'Novel'],
// };

// const {
//   title,
//   author,
//   publication: {year, publisher},
//   genres: [firstGenre, ...otherGenres],
// } = book;

// console.log(title);
// console.log(author);
// console.log(year);
// console.log(publisher);
// console.log(firstGenre);
// console.log(otherGenres);

let person = {
  firstName: 'Mitul',
  lastName: 'Kasundra',
  currentAge: 28,
};

let {firstName, lastName, middleName = '', currentAge = 22} = person;

console.log(firstName);
console.log(lastName);
console.log(middleName);
console.log(currentAge);
console.log(person);
