import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useSelector } from "react-redux";

import styles from "./button.module.css";

const OutlinedButton = ({ children }) => {

  let theme = useSelector((state) => state.theme.value)
  
  // let [theme] = useLocalStorage("react-theme", "light");
  theme = theme === "light" ? "dark" : "light";
  
  return <button className={styles[theme]}>{children}</button>;
};

export default OutlinedButton;
