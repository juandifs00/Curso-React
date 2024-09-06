import TodoItem from "./TodoItem";

const TodoList = ({ state = [] }) => {
  return (
    <ul className="list-group">
      {state.map((todo) => (
        // TodoItem
        <TodoItem key={state.id} state={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
