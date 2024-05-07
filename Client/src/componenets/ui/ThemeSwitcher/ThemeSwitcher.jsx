import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/slices/themeSlice";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

import styles from "./themeSwitcher.module.css";

const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dispatch = useDispatch();
  
  const [theme, setTheme] = useLocalStorage(
    "react-theme",
    defaultDark ? "dark" : "light"
  );
  
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    dispatch(toggleTheme());
  };
  // Este useEffect es el encargado de cambiar la configuracion del 
  // tema independientemente de la configuracino base del SO
  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

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
