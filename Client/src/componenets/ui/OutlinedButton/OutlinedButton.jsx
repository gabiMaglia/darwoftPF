import { useSelector } from "react-redux";

import styles from "./button.module.css";

const OutlinedButton = ({
  children,
  type = "",
  onClick = null,
 
}) => {
  let theme = useSelector((state) => state.theme.value);

  theme = theme === "light" ? "dark" : "light";

  return (
    <button

      onClick={onClick}
      type={type}
      className={styles[theme]}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
