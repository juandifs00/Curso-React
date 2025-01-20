import { useReducer } from "react";
import { AuthContext } from "./Authcontext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// const initialState = {
//   logged: false,
// };

const init = () => {
  const username = JSON.parse(localStorage.getItem("username"));

  return {
    logged: !!username,
    username,
  };
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const onLoggin = (name = "") => {
    const username = {
      id: "ABC",
      name,
    };

    const action = {
      type: types.login,
      payload: username,
    };

    localStorage.setItem("username", JSON.stringify(username));

    dispatch(action);
  };

  const onLogout = () => {
    localStorage.removeItem("username");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: onLoggin,
        logout: onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
