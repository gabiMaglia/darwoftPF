import { useEffect } from "react";

// Icons
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

// Custom hooks
import useLocalStorage from "../../../hooks/useLocalStorage";

// Styles
import styles from "./themeSwitcher.module.css";

const ThemeSwitcher = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "react-todo.theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("color-scheme", theme);
  }, [theme]);

  return (
    <aside className={styles.wrapper}>
      <div className={styles.btns}>
        <button
          className="btn"
          aria-label={`Change theme to ${
            theme === "light" ? "dark" : "light"
          } mode`}
          role="switch"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </aside>
  );
};
export default ThemeSwitcher;
