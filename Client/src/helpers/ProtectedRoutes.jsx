import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import PATH_ROUTES from "./routes.helper";

const ProtectedRoutes = ({ isLogged }) => {
  useEffect(() => {
    if (!isLogged) {
      toast.error("Inicia sesión para poder continuar");
    }
  }, [isLogged]);

  if (!isLogged) {
    return null;
  }

  return isLogged ? <Outlet /> : <Navigate to={PATH_ROUTES.HOME} />;
};

export default ProtectedRoutes;
