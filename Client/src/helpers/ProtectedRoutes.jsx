import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PATH_ROUTES from "./routes.helper";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ isLogged }) => {
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.auth.user?.role);

  const { pathname } = useLocation();

  const isProtectedRoute = () => {
    const protectedRoutes = Object.values(PATH_ROUTES.admin);
    return protectedRoutes.some((item) => pathname.includes(item));
  };
  const isProtected = isProtectedRoute();

  useEffect(() => {
    if (!isLogged) {
      toast.error("Inicia sesión para poder continuar");
    }
    if (isProtected && (!userRole || userRole.role !== "ADMIN") )
      navigate(`${PATH_ROUTES.HOME}`);
  }, [isLogged]);

  if (!isLogged) {
    navigate(`${PATH_ROUTES.HOME}`);
    return null;
  }

  return isLogged ? <Outlet /> : <Navigate to={PATH_ROUTES.HOME} />;
};

export default ProtectedRoutes;
