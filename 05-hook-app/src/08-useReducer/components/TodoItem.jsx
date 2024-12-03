const TodoItem = ({ state, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          state.done ? "text-decoration-line-through" : ""
        }`}
        onDoubleClick={() => onToggleTodo(state.id)}
        aria-label="span"
      >
        {state.description}
      </span>
      <button onClick={() => onDeleteTodo(state.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
