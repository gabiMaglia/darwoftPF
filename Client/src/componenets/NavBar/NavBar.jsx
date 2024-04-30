import { Link } from "react-router-dom";

import ShoppintCart from "../ShoppingCart/ShoppintCart";
import SearchBar from "../SearchBar/SearchBar";
import Auth from "../Auth/Auth";
import Logo from "../ui/Logo/Logo";

import styles from "./navBar.module.css";

const NavBar = () => {
  const categoriesGroups = [
    {
      name: "Electronica",
    },
    {
      name: "Celulares",
    },
    {
      name: "Computacion",
    },
    {
      name: "Varios",
    },
  ];

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navGroup1}>
          <div className={styles.logo}>
            <Link to="/">
              <Logo color={true} />
            </Link>
          </div>

          <ul className={styles.navLinks}>
            {categoriesGroups.map((cat) => (
              <li key={Math.random()}>
                <Link to={"/"}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.userControls}>
          <SearchBar />
          <Auth />
          <ShoppintCart />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
