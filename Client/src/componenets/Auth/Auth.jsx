import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";

import styles from "./auth.module.css";

const Auth = () => {

 
  return (

    <>
      <div className={styles.authPanel}>
        <OutlinedButton className="btn">Login</OutlinedButton>
        <OutlinedButton className="btn">SingUp</OutlinedButton>
      </div>
    </>
  );
};

export default Auth;
