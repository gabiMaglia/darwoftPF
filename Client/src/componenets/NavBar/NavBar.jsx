import { Link } from "react-router-dom";

import ThemeSwitcher from "../ui/ThemeSwitcher/ThemeSwitcher";
import ShoppintCart from "../ShoppingCart/ShoppintCart";
import SearchBar from "../SearchBar/SearchBar";
import Auth from "../Auth/Auth";
import Logo from "../ui/Logo/Logo";
import styles from "./navBar.module.css";
import { capitalizeFirstLetter } from "../../utils/strings";

const NavBar = () => {
  const categoriesGroups = [
    {
      name: "electronica",
    },
    {
      name: "celulares",
    },
    {
      name: "computacion",
    },
    {
      name: "varios",
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
                <Link to={"/"}>{capitalizeFirstLetter(cat.name)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.userControls}>
          <SearchBar />
          <ThemeSwitcher/>
          <Auth />
          <ShoppintCart />

        </div>
      </nav>
    </>
  );
};

export default NavBar;
