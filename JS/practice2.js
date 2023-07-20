// function sayHi() {
//   console.log(this.age);
// }

// let user = { name: "John", age: 22 };
// let admin = { name: "Admin", age: 20 };

// sayHi.call(user);
// sayHi.call(admin);

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach((student) => console.log(this.title + ": " + student));
//   },
// };

// group.showList();

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }

// let user = new User("John");
// user.sayHi();

// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }

// let User = makeClass("Hello");

// new User().sayHi();
