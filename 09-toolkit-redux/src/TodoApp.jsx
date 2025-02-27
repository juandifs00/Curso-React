import { useGetTodosQuery } from "./store/apis/todosApi";

const TodoApp = () => {
  const { data: todos, isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todos - RTK - Query</h1>
      <hr />
      <h4>isLoading... : {isLoading ? "true" : "false"}</h4>

      <pre>...</pre>

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? "DONE" : "PENDING"} </strong>
            {todo.title}
          </li>
        ))}
      </ul>

      <button>Next Todo</button>
    </>
  );
};

export default TodoApp;
