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
    case "ABC":
      throw new Error("Action.type = ABC no está implementada");
    default:
      return intialState;
  }
};
