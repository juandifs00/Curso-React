import TodoItem from "./TodoItem";

const TodoList = ({ state = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {state.map((todo) => (
        // TodoItem
        <TodoItem
          key={state.id}
          state={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
