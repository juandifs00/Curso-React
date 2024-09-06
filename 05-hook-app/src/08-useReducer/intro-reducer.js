const intialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

const todoReducer = (state = intialState, action = {}) => {
  if (action.type === "[TODO] Add Todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del tiempo",
  done: false,
};

const addTodoAction = {
  type: "[TODO] Add Todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
