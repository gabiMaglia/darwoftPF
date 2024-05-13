import ProductBoard from "../../componenets/ProductBoard/ProductBoard";
import SectionBanner from "../../componenets/ui/SectionBanner/SectionBanner";
import ProductFilters from "../../componenets/ProductFilters/ProductFilters";

import styles from "./home.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector(state => state.products.products)

  return (
    <>
      <SectionBanner title="Productos Destacados" />
      <div className={styles.productZone}>
        <ProductFilters />
        <ProductBoard products={products} />
      </div>
    </>
  );
};

export default Home;
