// const names = ["A", "B", "C", "D"];
// console.log(names[2]);
// console.log(names[names.length - 1]);

// const nums = [1];
// nums.push(12);
// nums.unshift(3);
// console.log(nums);

// const nums = [99, 199, 299]
// nums.splice(1, 0, 399)
// console.log(nums)

// const nums = [10, 20, 30, 40]
// nums.pop()
// nums.pop()
// nums.shift()
// console.log(nums)

// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }
// for (let count = 2; count >= 0; count--) {
//   console.log(count);
// }

// const notes = [
//   {
//     title: "My next trip",
//     body: "I would like to go to Spain",
//   },
//   {
//     title: "Habbits to work on",
//     body: "Exercise. Eating a bit better.",
//   },
//   {
//     title: "Office modification",
//     body: "Get a new seat",
//   },
// ];

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

// // const findNote = function (notes, noteTitle) {
// //     const index = notes.findIndex(function (note, index) {
// //         return note.title.toLowerCase() === noteTitle.toLowerCase()
// //     })
// //     return notes[index]
// // }

// const note = findNote(notes, "some other office modification");
// console.log(note);

// const notes = [
//   {
//     title: "My next trip",
//     body: "I would like to go to Spain",
//   },
//   {
//     title: "Habbits to work on",
//     body: "Exercise. Eating a bit better.",
//   },
//   {
//     title: "Office modification",
//     body: "Get a new seat",
//   },
// ];
// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };
// const note = findNote(notes, "my next trip");
// console.log(note);

const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean kitchen",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
];
const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
};

console.log(getThingsToDo(todos));
