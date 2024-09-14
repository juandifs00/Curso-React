import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

const TodoApp = () => {
  const {
    state,
    handleNewTodo,
    handleDelete,
    onToggleTodo,
    stateCount,
    pendingStateCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {stateCount}, <small>Pendientes: {pendingStateCount}</small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            state={state}
            onDeleteTodo={handleDelete}
            onToggleTodo={onToggleTodo}
          />
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
