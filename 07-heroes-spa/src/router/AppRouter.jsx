import { Navigate, Route, Routes } from "react-router-dom";

import DCPage from "../heroes/pages/DCPage";
import MarvelPage from "../heroes/pages/MarvelPage";
import LoginPage from "../auth/pages/LoginPage";

import { Navbar } from "../ui";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
