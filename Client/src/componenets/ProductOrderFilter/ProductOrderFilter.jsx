import styles from "./productOrderFilter.module.css";

const ProductOrderFilter = () => {
  return (
    <>
      <form className={styles.filter}>
        <div className={styles.dropdown}>
          <select className={styles.dropdownselect}>
            <option value="">Abc</option>
            <option value="1">A-z</option>
            <option value="2">Z-a</option>
         
          </select>
        </div>
        <div className={styles.dropdown}>
          <select className={styles.dropdownselect}>
            <option value="">Precio</option>
            <option value="1">MayorMenor</option>
            <option value="2">MenorMayor</option>   
          </select>
        </div>
      </form>
    </>
  );
};

export default ProductOrderFilter;
