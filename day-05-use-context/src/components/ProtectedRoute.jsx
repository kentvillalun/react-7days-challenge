import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../App";

const ProtectedRoute = () => {
  const { newName } = useContext(AppContext);

  if (!newName) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
