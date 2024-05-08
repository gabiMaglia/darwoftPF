import { productObject } from "../../utils/exapleObjects";
import ProductCard from "../ProductCard/ProductCard";


import styles from "./productBoard.module.css";

const ProductBoard = () => {
  return (
      <>
      
      <section className={styles.products}>
        {productObject.map((product) => (
          <ProductCard key={product._id + Math.random()} product={product} />
        ))}
      </section>
      
      </>

  );
};

export default ProductBoard;
