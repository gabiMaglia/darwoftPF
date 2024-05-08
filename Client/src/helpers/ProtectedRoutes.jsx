/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom"
import PATH_ROUTES from "./routes.helper"

const ProtectedRoutes = ({ isLogged  }) => {

    return (
        isLogged ? <Outlet /> : <Navigate to={PATH_ROUTES.HOME} />
    )
}

export default ProtectedRoutes