import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/strings";
import ProductOrderFilter from "../ProductOrderFilter/ProductOrderFilter";
import styles from "./productFilters.module.css";

const ProductFilters = () => {
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);
  return (
    <>
      <div className={styles.filterBox}>
        <span className={styles.cont}>
          <h2>Orden</h2>
          <ProductOrderFilter />
        </span>

        <div className={styles.cont}>
          <h2>Filtros</h2>

          <span>
            <h3>Grupo</h3>
            <ul>
              {categories.groups?.map((e) => (
                <li key={e._id + Math.random().toString()}>
                  {capitalizeFirstLetter(e.name)}
                </li>
              ))}
            </ul>
          </span>
          <span>
            <h3>Categoria</h3>
            <ul>
              {categories.categories?.map((e) => (
                <li key={e._id + Math.random().toString()}>
                  {capitalizeFirstLetter(e.catName)}
                </li>
              ))}
            </ul>
          </span>

          <span>
            <h3>Marcas</h3>
            <ul>
              {brands.brands?.map((e) => (
                <li key={e._id + Math.random().toString()}>
                  {capitalizeFirstLetter(e.brandName)}
                </li>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;
