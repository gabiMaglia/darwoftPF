import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./productBoard.module.css";


const ProductBoard = () => {
  const products = useSelector(state => state.products.products)
  return (
      <>
      
      <section className={styles.products}>
        {products?.map((product) => (
          <ProductCard key={product._id + Math.random()} product={product} />
        ))}
      </section>
      
      </>

  );
};

export default ProductBoard;
