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
    default:
      return intialState;
  }
};
