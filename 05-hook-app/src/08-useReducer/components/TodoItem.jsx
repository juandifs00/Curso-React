const TodoItem = ({ state, onDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{state.description}</span>
      <button onClick={() => onDeleteTodo(state.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
