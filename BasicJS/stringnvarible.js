// let city = 'Ahmedabad'
// let state = 'Gujarat'
// let location = city + ', ' + state
// console.log(location)

// --------------

// let isGuestOneVegan = true;

// let isGuestTwoVegan = true;

// if (isGuestOneVegan && isGuestTwoVegan) {
//   console.log("Only offer up vegan food.");
// } else if (isGuestOneVegan || isGuestTwoVegan) {
//   console.log("Make sure to offer up some vegan food.");
// } else {
//   console.log("Offer up anything on the menu.");
// }

// ------------

// Global scope (name, getName)
// Local scope (age)
// Local scope (location)
// Local scope (height)
// let name = "Andrew";
// let getName = function () {
//   console.log(name);
//   let age = 26;
//   if (2 > 0) {
//     console.log(name);
//     console.log(age);
//     let location = "Ahmedabad";
//   }
// };
// getName();
// console.log(age);
// if (1 < 2) {
//   console.log(name);
//   let height = 72;
//   getName();
// }

// --------

// let getNewScoreMessage = function () {
//   if (1 < 2) {
//     score = 3;
//   }
//   console.log(score);
// };
// getNewScoreMessage();
// console.log(score);
// let getNewScoreMessage = function () {
//   let score;
//   if (1 < 2) {
//     score = 3;
//   }
//   console.log(score);
// };
// getNewScoreMessage();
// console.log(score);

// let getNewScoreMessage = function () {
// if (1 < 2) {
// score = 3
// }
// console.log(score)
// }
// getNewScoreMessage()
// console.log(score) // Prints 3

// Example 2: No leaked global
// let getNewScoreMessage = function () {
// let score
// if (1 < 2) {
// score = 3
// }
// console.log(score)
// }
// getNewScoreMessage()
// console.log(score)
