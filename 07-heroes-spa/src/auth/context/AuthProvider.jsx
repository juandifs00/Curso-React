import { useReducer } from "react";
import { AuthContext } from "./Authcontext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState = {
  logged: false,
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const onLoggin = (name = "") => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: name,
      },
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: onLoggin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
