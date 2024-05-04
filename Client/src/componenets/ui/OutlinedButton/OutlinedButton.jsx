import { useSelector } from "react-redux";

import styles from "./button.module.css";

const OutlinedButton = ({ children }) => {
  let theme = useSelector((state) => state.theme.value);

  theme = theme === "light" ? "dark" : "light";

  return <button className={styles[theme]}>{children}</button>;
};

export default OutlinedButton;
