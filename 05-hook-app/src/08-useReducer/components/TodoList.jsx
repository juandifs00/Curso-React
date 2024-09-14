import TodoItem from "./TodoItem";

const TodoList = ({ state = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {state.map((todo) => (
        // TodoItem
        <TodoItem key={state.id} state={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
