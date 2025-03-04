import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import JournalRoutes from "../journal/routes/JournalRoutes";
import { useSelector } from "react-redux";
import CheckingAuth from "../ui/components/CheckingAuth";

const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  if (status === "Checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* JournalApp */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};

export default AppRouter;
