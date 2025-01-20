import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // const onLogin = () => {
  //   // Simulate login
  //   localStorage.setItem("isAuthenticated", "true");
  //   window.location.href = "/";
  // };

  const onLogin = () => {
    login("Juandiego");

    navigate("/", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
