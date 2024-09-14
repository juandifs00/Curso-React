// export const todoReducer = (intialState = [], action) => {
//   switch (action.type) {
//     case "[TODO] Add Todo":
//       return [...intialState, action.payload];
//     default:
//       return intialState;
//   }
// };
export const todoReducer = (intialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...intialState, action.payload];

    case "[TODO] Remove Todo":
      return intialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return intialState.map((todo) => {
        // id = action.payload
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return intialState;
  }
};
