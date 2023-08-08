//--------------------------------------  cunstructor-function
// function Person(person_name, person_age, person_gender) {
//   (this.name = person_name),
//     (this.age = person_age),
//     (this.gender = person_gender),
//     (this.greet = function () {
//       return 'Hi' + ' ' + this.name;
//     });
// }

// const person1 = new Person('Mitul', 22, 'male');
// const person2 = new Person('Misha', 25, 'female');

// console.log(person1.name);
// console.log(person2.name);
// console.log(`I'm ${person1.name} and I'm ${person1.age} years old.`);

//---------------------------------------  prototypes
// function Person() {
//   (this.name = 'Mitul'), (this.age = 22);
// }

// const person1 = new Person();
// const person2 = new Person();

// Person.prototype.gender = 'male';

// console.log(Person.prototype);

// console.log(person1.gender);
// console.log(person2.gender);

// function Persons() {
//   this.name = 'John';
// }

// Persons.prototype.age = 20;

// const person = new Persons();

// console.log(person.age);

// Persons.prototype = {age: 50};

// const person3 = new Persons();

// console.log(person3.age);
// console.log(person.age);

//--------------------------------------- Class and subclasses
// class People {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// class Student extends People {}

// let student1 = new Student('Jack');
// student1.greet();

//--------------------------------------   Getter and setter
// const student = {
//   firstName: 'Mitul',

//   get getName() {
//     return this.firstName;
//   },
// };

// console.log(student.firstName);

// console.log(student.getName);

// console.log(student.getName());

// const student = {
//     firstName: 'Mitul',

//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName);

// student.changeName = 'Meet';

// console.log(student.firstName);

// const student = {
//   firstName: 'Mitul',
// };

// Object.defineProperty(student, 'getName', {
//   get: function () {
//     return this.firstName;
//   },
// });

// Object.defineProperty(student, 'changeName', {
//   set: function (value) {
//     this.firstName = value;
//   },
// });

// console.log(student.firstName);

// student.changeName = 'Meet';

// console.log(student.firstName);

//---------------------------------------   asynchronous and synchronous
//synchronous
// function f1() {
//   console.log('it is my 1st function');
// }

// function f2() {
//   console.log('it is my 2nd function');
//   f1();
// }

// f2();

//asynchronous
// function delay_Greeting() {
//   setTimeout(function () {
//     console.log('Hello, Mitul');
//   }, 2000);
// }

// delay_Greeting();
// console.log('Start');
// console.log('End');
