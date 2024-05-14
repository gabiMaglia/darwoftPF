import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/strings";
import ProductOrderFilter from "../ProductOrderFilter/ProductOrderFilter";
import {
  filterByBrand,
  filterByCategory,
  filterByGroup,
  sortByName,
  sortByPrice,
} from "../../redux/slices/productSlice";

import styles from "./productFilters.module.css";

const ProductFilters = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);

  const handleFilterByCategory = (categoryName) => {
    dispatch(filterByCategory(categoryName));
  };

  const handleFilterByBrand = (brandName) => {
    dispatch(filterByBrand(brandName));
  };

  const handleFilterByGroup = (groupName) => {
    dispatch(filterByGroup(groupName));
  };

  const handleAbcSort = (e) => {
    const value = e.target.value;

    dispatch(sortByName(value));
  };

  const handlePriceSort = (e) => {
    const value = e.target.value;
    console.log(value);
    dispatch(sortByPrice(value));
  };

  return (
    <>
      <div className={styles.filterBox}>
        <span className={styles.cont}>
          <h2>Orden</h2>
          <ProductOrderFilter sorByName={handleAbcSort} sortByPrice={handlePriceSort} />
        </span>

        <div className={styles.cont}>
          <h2>Filtros</h2>

          <span>
            <h3>Grupo</h3>
            <ul>
              {categories.groups?.map((e) => (
                <li
                  key={e._id + Math.random().toString()}
                  onClick={() => handleFilterByGroup(e._id)}
                >
                  {capitalizeFirstLetter(e.name)}
                </li>
              ))}
            </ul>
          </span>
          <span>
            <h3>Categoria</h3>
            <ul>
              {categories.categories?.map((e) => (
                <li
                  key={e._id + Math.random().toString()}
                  onClick={() => handleFilterByCategory(e.catName)}
                >
                  {capitalizeFirstLetter(e.catName)}
                </li>
              ))}
            </ul>
          </span>

          <span>
            <h3>Marcas</h3>
            <ul>
              {brands.brands?.map((e) => (
                <li
                  key={e._id + Math.random().toString()}
                  onClick={() => handleFilterByBrand(e.brandName)}
                >
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
