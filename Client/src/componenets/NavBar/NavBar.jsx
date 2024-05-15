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
import { useDispatch, useSelector } from "react-redux";
import PATH_ROUTES from "../../helpers/routes.helper";
import { filterByGroup } from "../../redux/slices/productSlice";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categoriesGroups = useSelector((state) => state.categories.groups);

  const dispatch = useDispatch();

  const handleFilterByGroup = (groupName) => {
    dispatch(filterByGroup(groupName));
  };
  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

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
              <li
                onClick={() => handleFilterByGroup({_id:cat._id, name:cat.name})}
                key={cat.id + Math.random().toString()}
              >
                <Link to={PATH_ROUTES.HOME}>
                  <span onClick={handleOpenNav}>{capitalizeFirstLetter(cat.name)}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.userControlsgroup}>
            <div className={styles.userControls}>
              <SearchBar />

              <ThemeSwitcher />

              <span onClick={handleOpenNav}>
                <Auth />
              </span>
            </div>
          </div>
        </div>

        <div onClick={handleOpenNav} className={styles.shoppingCart}>
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
