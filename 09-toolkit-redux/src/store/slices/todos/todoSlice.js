import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "name",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = todoSlice.actions;

// El snippet anterior es un ejemplo de cómo se vería un slice de Redux Toolkit.
// En este caso, el slice es para un contador simple.
// La forma para utilizar el snippet es la siguiente:
// Crea el archivo donde vas a tener el slice, luego escribe redux-slice y presiona la tecla Tab.
// Eso generará el código del slice.
// Para poder hacer esto primero se debe de configurar el snippet en el archivo de configuración de VSCode.
// Para hacer esto, se debe de ir a File -> Preferences -> User Snippets. (Preciona la tecla F1 y escribe snippets)
// Tambien puedes presionar Ctrl + Shift + P y escribir snippets.
// Luego se debe de seleccionar JavaScript y configura el snippet a tu gusto.
