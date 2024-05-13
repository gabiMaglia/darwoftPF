import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductDetail,
} from "../../redux/slices/productSlice";
import ProductThumbnails from "./Thumbnails/ProductThumbnails";
import { capitalizeFirstLetter } from "../../utils/strings";
import styles from './productDetail.module.css'
import SimpleCarousel from "./SImpleCarusel/SimpleCarousel";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productDetail);
  // console.log(product)
  useEffect(() => {
    return () => {
      // dispatch(clearProductDetail());
    };
  }, []);

  return (
    <section className={styles.productDetailContainer}>
      <div className={styles.productDetailMain}>
        <article className={styles.productThumbnails}>
          <SimpleCarousel images={product?.images} />
        </article>
        <article className={styles.productInfo}>
          <span className={styles.productCategory}>{capitalizeFirstLetter(product?.category.catName)}</span>
          <h2 className={styles.productBrand}>{capitalizeFirstLetter(product?.brand.brandName)}</h2>
          <h1 className={styles.productName}>{capitalizeFirstLetter(product?.name)}</h1>
          <div className={styles.productPricingBox}>
            <div className={styles.priceOptions}>
              <span className={styles.cashPrice}>
                <p>Contado</p>
                <b>ARS {product?.price}</b>
              </span>
              <span className={styles.debitPrice}>
                <p>Debito</p>
                <b>ARS {(product?.price * 1.30).toFixed(2)}</b>
              </span>
              <span className={styles.installmentPrice}>
                <p>6 cuotas de</p>
                <b>ARS {(product?.price * 1.50 / 6).toFixed(2)}</b>
              </span>
            </div>
            <div className={styles.productActions}>{/* fav y agregar al carrito */}</div>
          </div>
        </article>
      </div>
      <div className={styles.productDescription}>
        <p>
          {product?.productDescription}
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;