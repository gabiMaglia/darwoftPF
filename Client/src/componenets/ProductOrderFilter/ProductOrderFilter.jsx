import styles from "./productOrderFilter.module.css";

const ProductOrderFilter = ({ sorByName, sortByPrice }) => {
  return (
    <>
      <form className={styles.filter}>
        <div className={styles.dropdown}>
          <select onChange={sorByName} className={styles.dropdownselect}>
            <option disabled selected value="">
              Abc
            </option>
            <option value="asc">A-z</option>
            <option value="dsc">Z-a</option>
          </select>
        </div>
        <div className={styles.dropdown}>
          <select onChange={sortByPrice}  className={styles.dropdownselect}>
            <option disabled selected value="">Precio</option>
            <option value="mayor">MayorMenor</option>
            <option value="menor">MenorMayor</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ProductOrderFilter;
