import { Link } from "react-router-dom";
import OutlinedButton from "../../../componenets/ui/OutlinedButton/OutlinedButton";

import PATH_ROUTES from "../../../helpers/routes.helper";
import styles from "./dashboardNav.module.css";


const DashboardNav = () => {
  return (
    <nav className={styles.navBar}>
      <Link to={PATH_ROUTES.PERSONAL}>
        <OutlinedButton>Mi Cuenta</OutlinedButton>
      </Link>
      <Link to={PATH_ROUTES.WISHLIST}>
        <OutlinedButton>WishList</OutlinedButton>
      </Link>

      <Link to={PATH_ROUTES.STOCK}>
        <OutlinedButton>Stock</OutlinedButton>
      </Link>

      <Link to={PATH_ROUTES.BRANDSCATEGORY}>
        <OutlinedButton>Marcas/Categorias</OutlinedButton>
      </Link>

      <Link className={styles.return} to={PATH_ROUTES.HOME}>
        <OutlinedButton>Regresar</OutlinedButton>
      </Link>

    </nav>
  );
};

export default DashboardNav;
