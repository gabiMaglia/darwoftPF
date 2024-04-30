import styles from "./auth.module.css";

const Auth = () => {
  return (
    <>
      <div className={styles.authPanel}>
        <button className="btn">Login</button>
        <button className="btn">SingUp</button>
      </div>
    </>
  );
};

export default Auth;
