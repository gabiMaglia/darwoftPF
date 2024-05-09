import { Routes, Route, Link, Outlet } from 'react-router-dom';

import PATH_ROUTES from '../../../helpers/routes.helper'
import styles from './dashboardNav.module.css'

const DashboardNav = () => {
  return (
    <nav className={styles.navBar}>
      <Link to={PATH_ROUTES.DASHBOARD}>
        <h2>Mi Cuenta</h2>
      </Link>
      <Link to={PATH_ROUTES.WISHLIST}>
        <h2>Mi lista de deseos</h2>
      </Link>

       <Outlet />
    
        <Link to="/stock">
          <h2>Stock</h2>
        </Link>

        <Link to="/brandscat">
          <h2>Brands/Categories</h2>
        </Link>
   

      <Link to="/">
        <h2>Regresar</h2>
      </Link>
    </nav>
  );
};

export default DashboardNav;
