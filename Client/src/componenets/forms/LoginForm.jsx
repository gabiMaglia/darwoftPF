import styles from './forms.module.css'

const LoginForm = () => {
  return (
    <div className={styles.form}>
      <span className={styles.inputBoxes}>
        <label htmlFor="">Email</label>
        <input type="text" />
      </span>

      <span className={styles.inputBoxes}>
        <label htmlFor="">Password</label>
        <input type="password" />
      </span>
    </div>
  );
};

export default LoginForm;
