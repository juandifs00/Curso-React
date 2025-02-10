import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en el authReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe de (login) llamar el login y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        username: "Juan",
        id: "123",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      username: action.payload,
    });
  });

  test("Debe de (logout) el name del usuario y establecer el logged en false", () => {
    const state = {
      logged: true,
      username: { id: "123", username: "Juan" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({
      logged: false,
    });
  });
});
