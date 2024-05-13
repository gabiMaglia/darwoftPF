import { Link } from "react-router-dom";

import PATH_ROUTES from "../../../helpers/routes.helper";
import styles from "./dashboardNav.module.css";


const DashboardNav = () => {
  return (
    <nav className={styles.navBar}>
      <Link to={PATH_ROUTES.PERSONAL}>
        <h3>Mi Cuenta</h3>
      </Link>
      <Link to={PATH_ROUTES.WISHLIST}>
        <h3>Mi lista de deseos</h3>
      </Link>

      <Link to={PATH_ROUTES.STOCK}>
        <h3>Stock</h3>
      </Link>

      <Link to={PATH_ROUTES.BRANDSCATEGORY}>
        <h3>Brands/Categories</h3>
      </Link>

      <Link to={PATH_ROUTES.HOME}>
        <h3>Regresar</h3>
      </Link>
    </nav>
  );
};

export default DashboardNav;
