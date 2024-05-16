import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { addItem } from "../../redux/slices/cartSlice";
import Img from "../ui/Img/Img";
import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import { parseItemForCart } from "../../utils/objects";

import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(parseItemForCart(product)));
    toast.success("Producto agregado al carrito");
  };

  const handleAddToWishList = () => {};

  return (
    <div className={styles.productCard}>
      {product.isFeatured && <div className={styles.badge}>Hot</div>}
      <div className={styles.productTumb}>
        <Img img={product.images[0]} alt={product.name} />
      </div>
      <div className={styles.productDetails}>
        <span className={styles.productCatagory}>
          {product.category.catName}
        </span>
        <h4>
          <Link to={`detail/${product._id}`}>{product.name}</Link>
        </h4>
        <p>{product.brand.brandName}</p>
        <div className={styles.productBottomDetails}>
          <div className={styles.productPrice}>
            <p>${product.price}</p>
          </div>
          <div className={styles.productLinks}>
            <OutlinedButton>
              <i className="fa fa-heart"></i>
            </OutlinedButton>
            <div onClick={handleAddToCart}>
              <OutlinedButton>
                <i className="fa fa-shopping-cart"></i>
              </OutlinedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
