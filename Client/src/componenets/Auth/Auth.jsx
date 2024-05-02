import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";

import styles from "./auth.module.css";

const Auth = () => {
  return (

    <>
      <div className={styles.authPanel}>
        <OutlinedButton className={styles.btn}>Login</OutlinedButton>
        <OutlinedButton className={styles.btn}>SingUp</OutlinedButton>
      </div>
    </>
  );
};

export default Auth;
