import { Link } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

import ThemeSwitcher from "../ui/ThemeSwitcher/ThemeSwitcher";
import ShoppintCart from "../ShoppingCart/ShoppintCart";
import SearchBar from "../SearchBar/SearchBar";
import Auth from "../Auth/Auth";
import Img from "../ui/Img/Img";
import styles from "./navBar.module.css";

import { capitalizeFirstLetter } from "../../utils/strings";

import mainLogoColor from "../../assets/logos_png/logos folk-02.png";

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
        <div className={styles.logo}>
          <Link to="/">
            <Img img={mainLogoColor} alt="Folk tecnotienda" />
          </Link>
        </div>

        <Menu sOpen={true} width={ '300px' } right
        >
          <ul className={styles.navLinks}>
            {categoriesGroups.map((cat) => (
              <li key={Math.random()}>
                <Link to={"/"}>{capitalizeFirstLetter(cat.name)}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.userControlsgroup}>
            <div className={styles.userControls}>
              <SearchBar />
              <ThemeSwitcher />
              <Auth />
            </div>
            <ShoppintCart />
          </div>
        </Menu>
      </nav>
    </>
  );
};

export default NavBar;
