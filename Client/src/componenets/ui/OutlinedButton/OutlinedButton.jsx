import { useLocalStorage } from "../../../hooks/useLocalStorage";
import styles from "./button.module.css";

const OutlinedButton = ({ children }) => {
  let [theme] = useLocalStorage("react-theme", "light");
  theme = theme === "light" ? "dark" : "light";
  
  return <button className={styles[theme]}>{children}</button>;
};

export default OutlinedButton;
