
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/slices/themeSlice";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

import styles from "./themeSwitcher.module.css";

const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  
  const [storedTheme, setStoredTheme] = useLocalStorage(
    "react-theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
   
    if (storedTheme) {
      if (storedTheme !== theme) {
        dispatch(toggleTheme());
      }
    } else {
   
      setStoredTheme(theme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
    setStoredTheme(theme);
  }, [theme]);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <aside className={styles.wrapper}>
      <span onClick={handleTheme}>
        <OutlinedButton>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </OutlinedButton>
      </span>
    </aside>
  );
};
export default ThemeSwitcher;
