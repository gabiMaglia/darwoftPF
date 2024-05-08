import ProductBoard from "../../componenets/ProductBoard/ProductBoard";
import SectionBanner from "../../componenets/ui/SectionBanner/SectionBanner";
import ProductFilters from "../../componenets/ProductFilters/ProductFilters";
import ProductOrderFilter from "../../componenets/ProductOrderFilter/ProductOrderFilter";

import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <SectionBanner title="Productos Destacados" />
      <div className={styles.productZone}>
        <ProductFilters />
        {/* <ProductOrderFilter /> */}
        <ProductBoard />
      </div>
    </>
  );
};

export default Home;
