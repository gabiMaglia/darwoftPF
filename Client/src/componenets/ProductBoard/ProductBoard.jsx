import ProductCard from "../ProductCard/ProductCard";
import styles from "./productBoard.module.css";

const ProductBoard = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className={styles.noProductsAdvice}>
        <h3>
          No tenemos en este momento productos disponibles para esta categoría
        </h3>
      </div>
    );
  }
  return (
    <section className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductBoard;
