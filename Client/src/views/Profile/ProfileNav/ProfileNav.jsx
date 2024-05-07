import { Link } from "react-router-dom";

import styles from './profileNav.module.css'

const ProfileNav = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="/profile">
        <h2>Mi Cuenta</h2>
      </Link>
      <Link to="/wish">
        <h2>Mi lista de deseos</h2>
      </Link>

      {/* {
        <Link to="/">
          <h2>Mi Cuenta</h2>
        </Link>

        <Link to="/profile">
          <h2>Mi Cuenta</h2>
        </Link>
      } */}

      <Link to="/">
        <h2>Regresar</h2>
      </Link>
    </nav>
  );
};

export default ProfileNav;
