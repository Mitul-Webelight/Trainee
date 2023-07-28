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
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

const sortTodos = (todos) => {
  todos.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

const deleteTodo = (todos, todoText) => {
  const index = todos.findIndex((todo) => {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

const getThingsToDo = (todos) => {
  return todos.filter((todo) => {
    return !todo.completed;
  });
};

sortTodos(todos);
console.log(todos);

// console.log(getThingsToDo(todos))

// deleteTodo(todos, '!!buy food')
// console.log(todos)
