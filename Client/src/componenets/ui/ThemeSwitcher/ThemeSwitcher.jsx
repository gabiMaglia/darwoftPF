import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import styles from "./themeSwitcher.module.css";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "react-theme",
    defaultDark ? "dark" : "light"
  );
  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  return (
    <aside className={styles.wrapper}>
      <span onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <OutlinedButton>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </OutlinedButton>
      </span>
    </aside>
  );
};
export default ThemeSwitcher;
