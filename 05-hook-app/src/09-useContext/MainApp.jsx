import UserProvider from "./context/UserProvider";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import Navbar from "./Navbar";

const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */}
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="/*" element={<HomePage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};

export default MainApp;
