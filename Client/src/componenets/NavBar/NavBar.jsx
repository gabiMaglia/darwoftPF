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
import PATH_ROUTES from "../../helpers/routes.helper";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categoriesGroups = useSelector((state) => state.categories.groups)

  const handleOpenNav = () => {
    setIsOpen(!isOpen)
  } 

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logo}>
          <Link to={PATH_ROUTES.HOME}>
            <Img img={mainLogoColor} alt="Folk tecnotienda" />
          </Link>
        </div>

        <div className={`${styles.navItems} ${isOpen && styles.open}`}>
          <ul className={styles.navLinks}>
            {categoriesGroups?.map((cat) => (
              <li onClick={handleOpenNav}  key={cat.id + Math.random().toString()}>
                <span>{capitalizeFirstLetter(cat.name)}</span>
              </li>
            ))}
          </ul>

          <div className={styles.userControlsgroup}>
            <div className={styles.userControls}>
              <SearchBar />
           
                <ThemeSwitcher  />
          
              <span onClick={handleOpenNav} >
                <Auth  onClick={handleOpenNav} />
              </span>
            </div>
          </div>
        </div>

        <div onClick={handleOpenNav}  className={styles.shoppingCart}>
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
