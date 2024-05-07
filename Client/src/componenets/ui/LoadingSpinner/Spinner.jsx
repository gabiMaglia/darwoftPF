import styles from "./spiner.module.css";

const Spinner = () => {
  return (
    <>
      <span className={styles.overlay}></span>
      <div className={styles.spinner}></div>
    </>
  );
};

export default Spinner;
