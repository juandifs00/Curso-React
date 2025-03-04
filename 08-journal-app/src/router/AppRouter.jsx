import { Navigate, Route, Routes } from "react-router-dom";

import AuthRoutes from "../auth/routes/AuthRoutes";

import JournalRoutes from "../journal/routes/JournalRoutes";
import CheckingAuth from "../ui/components/CheckingAuth";
import useCheckAuth from "../hooks/useCheckAuth";

const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "Checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "Authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* Login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};

export default AppRouter;
