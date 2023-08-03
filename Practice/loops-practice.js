const library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
];
for (let i = 0; i < library.length; i++) {
  let book = "'" + library[i].title + "'" + ' by ' + library[i].author + '.';
  if (library[i]) {
    console.log('Already read ' + book);
  }
}

let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let largest = arr[0];
for (let i = 0; i < arr.length; i++) {
  largest = arr[i] > largest ? arr[i] : largest;
}
console.log(largest);

const student = {
  name: 'Mitul',
  class: 12,
  age: 22,
};
for (let key in student) {
  console.log(`${key} => ${student[key]}`);
}

const salaries = {
  Them: 24000,
  Your: 34000,
  My: 55000,
};
for (let i in salaries) {
  let salary = '$' + salaries[i];
  console.log(`${i} : ${salary}`);
}

const string = 'code';
for (let i in string) {
  console.log(string[i]);
}

const cars = 'maruti';
for (let a of cars) {
  console.log(a);
}

const students = ['John', 'Sara', 'Jack'];
for (let element of students) {
  console.log(element);
}

const set = new Set([1, 2, 3]);
for (let i of set) {
  console.log(i);
}

let map = new Map();
map.set('name', 'Jack');
map.set('age', '27');
for (let [key, value] of map) {
  console.log(key + '- ' + value);
}

// 17 and we got a dream to have a family
// A house and everything in between
// And then, oh, suddenly we turned 23
// Now we got pressure for taking our life more seriously
// We got our dead-end jobs and got bills to pay
// Have old friends and know our enemies
// Now I, I'm thinking back to when I was young
// Back to the day when I was falling in love