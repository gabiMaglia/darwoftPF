import { Link } from "react-router-dom";

import ThemeSwitcher from "../ui/ThemeSwitcher/ThemeSwitcher";
import ShoppintCart from "../ShoppingCart/ShoppintCart";
import SearchBar from "../SearchBar/SearchBar";
import Auth from "../Auth/Auth";
import Img from "../ui/Img/Img";
import styles from "./navBar.module.css";

import { capitalizeFirstLetter } from "../../utils/strings";

import mainLogoColor from "../../assets/logos_png/logos folk-02.png";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categoriesGroups = useSelector((state) => state.categories.groups)
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <Link to="/">
            <Img img={mainLogoColor} alt="Folk tecnotienda" />
          </Link>
        </div>

        <div className={`${styles.navItems} ${isOpen && styles.open}`}>
          <ul className={styles.navLinks}>
            {categoriesGroups?.map((cat) => (
              <li key={cat.id + Math.random().toString()}>
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
          </div>
        </div>

        <div className={styles.shoppingCart}>
          <ShoppintCart />
        </div>
        <div
          className={`${styles.navToogle} ${isOpen && styles.open}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
