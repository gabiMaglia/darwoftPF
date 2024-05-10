
import styles from "./productOrderFilter.module.css";

const ProductOrderFilter = () => {
  return (
    <>
      <form className={styles.filter}>
        <div className={styles.dropdown}>
          <select className={styles.dropdownselect}>
            <option value="">Price range</option>
            <option value="1">Option #1</option>
            <option value="2">Option #2</option>
            <option value="3">Option #3</option>
          </select>
        </div>
        <div className={styles.dropdown}>
          <select className={styles.dropdownselect}>
            <option value="">Collection</option>
            <option value="1">Option #1</option>
            <option value="2">Option #2</option>
            <option value="3">Option #3</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ProductOrderFilter;
