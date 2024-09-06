import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

const intialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del tiempo",
    done: false,
  },
];

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, intialState);

  const handleNewTodo = (todo) => {
    console.log({ todo });
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList state={state} />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>

          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
