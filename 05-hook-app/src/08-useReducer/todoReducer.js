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

    default:
      return intialState;
  }
};
