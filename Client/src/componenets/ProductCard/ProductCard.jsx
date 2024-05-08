import Img from "../ui/Img/Img";

import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className={styles.productCard}>
       {product.isFeatured && <div className={styles.badge}>Hot</div> } 
        <div className={styles.productTumb}>
          <Img img={product.images[0]} alt={product.name} />
        </div>
        <div className={styles.productDetails}>
          <span className={styles.produCtcatagory}>{product.productCategory.catName}</span>
          <h4>
            <a href="">{product.name}</a>
          </h4>
          <p>
          {product.productBrand.brandName}
          </p>
          <div className={styles.productBottomDetails}>
            <div className={styles.productPrice}>
              {/* <small>$96.00</small> */}
              <p>$230.99</p>
            </div>
            <div className={styles.productLinks}>
              <a href="">
                <i className="fa fa-heart"></i>
              </a>
              <a href="">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
