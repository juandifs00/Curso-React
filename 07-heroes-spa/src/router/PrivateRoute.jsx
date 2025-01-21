import { useContext } from "react";
import { AuthContext } from "../auth/context/Authcontext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
