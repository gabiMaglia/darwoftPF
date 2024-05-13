import { Link } from 'react-router-dom';
import Img from "../ui/Img/Img";
import styles from "./productCard.module.css";
import { useDispatch } from 'react-redux';
import { getProductsByIdAsync } from '../../redux/slices/productSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart= () => {
    
  }

  const handleAddToWishLIst= () => {

  }

  const handlePrepareDetail= (id) => {
    dispatch(getProductsByIdAsync(id));
  }

  return (
    <>
      <div className={styles.productCard}>
       {product.isFeatured && <div className={styles.badge}>Hot</div> } 
        <div className={styles.productTumb}>
          <Img img={product.images[0]} alt={product.name} />
        </div>
        <div className={styles.productDetails}>
          <span className={styles.produCtcatagory}>{product.category.catName}</span>
          <h4 onClick={() => handlePrepareDetail(product._id)}>
          <Link to={`/detail/${product._id}`}>{product.name}</Link>
          </h4>
          <p>
          {product.brand.brandName}
          </p>
          <div className={styles.productBottomDetails}>
            <div className={styles.productPrice}>
      
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
