// const todo = ["ME", "I", "YOU", "HE", "THEY"];

// console.log(`You have ${todo.length} todos!`);

// console.log(todo[0]);
// console.log(todo[todo.length - 1]);

const todos = [
  "Order cat food",
  "Clean kitchen",
  "Buy food",
  "Do work",
  "Exercise",
];

todos.forEach(function (todo, index) {
  const num = index + 1;
  console.log(`${num}. ${todo}`);
});
