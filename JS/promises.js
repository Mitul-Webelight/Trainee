// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// promise.then(function (result) {
//   console.log(result); // 1
//   return result * 2;
// });

// const promise = new Promise((res, rej) => {

// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1

//     return new Promise((resolve, reject) => {
//       // (*)
//       setTimeout(() => {
//         resolve(result * 2);
//       }, 1000);
//     });
//   })
//   .then(function (result) {
//     // (**)

//     console.log(result); // 2

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result); // 4
//   });

// let names = ["iliakan", "remy", "jeresig"];

// let requests = names.map((name) =>
//   fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// );

// Promise.all(requests)
//   .then((responses) => {
//     for (let response of responses) {
//       alert(`${response.url}: ${response.status}`);
//     }

//     return responses;
//   })
//   .then((responses) => Promise.all(responses.map((r) => r.json())))
//   .then((users) => users.forEach((user) => alert(user.name)));

// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];

// // map every url to the promise of the fetch
// let requests = urls.map((url) => fetch(url));

// // Promise.all waits until all jobs are resolved
// Promise.all(requests).then((responses) =>
//   responses.forEach((response) => alert(`${response.url}: ${response.status}`))
// );

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is the message!");
//   }, 2000);
// });
// promise.then((data) => {
//   console.log(data);
// }).catch((e) => {
//     console.log(e);
// })

// async function f() {
//   return 1;
// }

// f().then((data) => {
//   console.log(data);
// });

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(resolve);
//     setTimeout(() => resolve(this.num * 2), 1000);
//   }
// }

// async function f() {
//   let result = await new Thenable(1);
//   console.log(result);
// }

// f();

// const f = async (resolve, reject) => {
//   try {
//     const { user, email, pasword } = req.body;

//     let existingUser;
//     if (user === existingUser) {
//       return res.json({ message: "User exist!" });
//     }

//     const users = new User({
//       user,
//       email,
//       pasword,
//     });
//     await users.save();
//     await res.status(200).json({ message: "user added successfully!" });
//   } catch (e) {
//     return console.log(e);
//   }
// };
// f();


