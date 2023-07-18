// const todo = ["ME", "I", "YOU", "HE", "THEY"];

// console.log(`You have ${todo.length} todos!`);

// console.log(todo[0]);
// console.log(todo[todo.length - 1]);

// const todos = [
//   "Order cat food",
//   "Clean kitchen",
//   "Buy food",
//   "Do work",
//   "Exercise",
// ];

// todos.forEach(function (todo, index) {
//   const num = index + 1;
//   console.log(`${num}. ${todo}`);
// });

// const todos = [{
//   text: 'Order cat food',
//   completed: true
// }, {
//   text: 'Clean kitchen',
//   completed: false
// }, {
//   text: 'Buy food',
//   completed: true
// }, {
//   text: 'Do work',
//   completed: false
// }, {
//   text: 'Exercise',
//   completed: true
// }]

// const deleteTodo = function (todos, todoText) {
//   const index = todos.findIndex(function (todo) {
//       return todo.text.toLowerCase() === todoText.toLowerCase()
//   })

//   if (index > -1) {
//       todos.splice(index, 1)
//   }
// }

// deleteTodo(todos, 'buy food')
// console.log(todos)

// const todos = [
//   {
//     text: "Buy food",
//     completed: true,
//   },
//   {
//     text: "Do work",
//     completed: false,
//   },
//   {
//     text: "Exercise",
//     completed: true,
//   },
// ];
// const sortTodos = function (todos) {
//   todos.sort(function (a, b) {
//     if (!a.completed && b.completed) {
//       return -1;
//     } else if (!b.completed && a.completed) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// };
// sortTodos(todos);
// console.log(todos);
