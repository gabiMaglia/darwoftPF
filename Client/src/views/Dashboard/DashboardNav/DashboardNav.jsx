import { Link } from "react-router-dom";
import OutlinedButton from "../../../componenets/ui/OutlinedButton/OutlinedButton";

import PATH_ROUTES from "../../../helpers/routes.helper";
import styles from "./dashboardNav.module.css";

const DashboardNav = ({ isAuthenticated }) => {

  return (
    <div className={styles.navCont}>
    <nav className={styles.navBar}>
      <Link to={PATH_ROUTES.PERSONAL}>
        <OutlinedButton>Mi Cuenta</OutlinedButton>
      </Link>
      {isAuthenticated.role === "USER" && (
        <Link to={PATH_ROUTES.WISHLIST}>
          <OutlinedButton>WishList</OutlinedButton>
        </Link>
      )}
      {isAuthenticated.role === "ADMIN" && (
        <>
          <Link to={PATH_ROUTES.admin.STOCK}>
            <OutlinedButton>Stock</OutlinedButton>
          </Link>

          <Link to={PATH_ROUTES.admin.BRANDSCATEGORY}>
            <OutlinedButton>Marcas/Categorias</OutlinedButton>
          </Link>
        </>
      )}
      <Link className={styles.return} to={PATH_ROUTES.HOME}>
        <OutlinedButton>Regresar</OutlinedButton>
      </Link>
    </nav>
    </div>
  );
};

export default DashboardNav;
