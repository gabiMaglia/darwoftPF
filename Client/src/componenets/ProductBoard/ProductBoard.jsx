import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./productBoard.module.css";

const ProductBoard = ({ products }) => {
  const userWishlist = useSelector((state) => state.auth.user.wishlist);

  // Crear un Set de IDs de la wishlist para búsqueda rápida
  const wishlistSet = new Set(userWishlist);

  // Mapear los productos y añadir isListed: true si están en la wishlist
  const listedProducts = products.map(product => {
    if (wishlistSet.has(product._id)) {
      return { ...product, isListed: true };
    }
    return product;
  });

  if (!products || products.length === 0) {
    return (
      <div className={styles.noProductsAdvice}>
        <h3>Sin Productos</h3>
      </div>
    );
  }
  return (
    <section className={styles.products}>
      {listedProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default ProductBoard;
