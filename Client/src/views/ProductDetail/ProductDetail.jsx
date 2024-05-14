import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/strings";
import styles from "./productDetail.module.css";
import SimpleCarousel from "./SImpleCarusel/SimpleCarousel";
import {
  clearProductDetail,
  getProductsByIdAsync,
} from "../../redux/slices/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.productDetail);

  useEffect(() => {
    const detailPopulate = async (id) => {
      try {
        await dispatch(getProductsByIdAsync(id));
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    if (id) {
      detailPopulate(id);
    }

    return () => {
      dispatch(clearProductDetail());
    };
  }, [dispatch, id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.productDetailContainer}>
      <div className={styles.productDetailMain}>
        <article className={styles.productThumbnails}>
          <SimpleCarousel />
        </article>
        <article className={styles.productInfo}>
          <span className={styles.productCategory}>
            {capitalizeFirstLetter(product?.category?.catName)}
          </span>
          <h2 className={styles.productBrand}>
            {capitalizeFirstLetter(product?.brand?.brandName)}
          </h2>
          <h1 className={styles.productName}>
            {capitalizeFirstLetter(product?.name)}
          </h1>
          <div className={styles.productPricingBox}>
            <div className={styles.priceOptions}>
              <span className={styles.cashPrice}>
                <p>Contado</p>
                <b>ARS {product?.price}</b>
              </span>
              <span className={styles.debitPrice}>
                <p>Debito</p>
                <b>ARS {(product?.price * 1.3).toFixed(2)}</b>
              </span>
              <span className={styles.installmentPrice}>
                <p>6 cuotas de</p>
                <b>ARS {((product?.price * 1.5) / 6).toFixed(2)}</b>
              </span>
            </div>
            <div className={styles.productActions}>
              <a href="">
                <i className="fa fa-heart"></i>
              </a>
              <a href="">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className={styles.productDescription}>
        <p>{product?.productDescription}</p>
      </div>
    </section>
  );
};

export default ProductDetail;