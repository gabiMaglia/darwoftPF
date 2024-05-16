
import { useSelector } from "react-redux";

import styles from "./button.module.css";

const OutlinedButton = ({
  children,
  type = "",
  onClick = null,
}) => {
  const theme = useSelector((state) => state.theme.value);
  const buttonTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      onClick={onClick}
      type={type}
      className={styles[buttonTheme]}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;