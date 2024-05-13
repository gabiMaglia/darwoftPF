import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsByIdAsync } from "../../redux/slices/productSlice";
import toast from "react-hot-toast";
import { addItem } from "../../redux/slices/cartSlice";
import Img from "../ui/Img/Img";
import OutlinedButton from "../ui/OutlinedButton/OutlinedButton";
import { parseItemForCart } from "../../utils/objects";
import PATH_ROUTES from "../../helpers/routes.helper";

import styles from "./productCard.module.css";
const ProductCard = ({ product }) => {
  console.log(product)
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(parseItemForCart(product)))
    toast.success("Producto agregado al carrito")
  };

  const handleAddToWishLIst = () => {};

  const handlePrepareDetail = (id) => {
    dispatch(getProductsByIdAsync(id));
  };

  return (
    <>
      <div className={styles.productCard}>
        {product.isFeatured && <div className={styles.badge}>Hot</div>}
        <div className={styles.productTumb}>
          <Img img={product.images[0]} alt={product.name} />
        </div>
        <div className={styles.productDetails}>
          <span className={styles.produCtcatagory}>
            {product.category.catName}
          </span>
          <h4 onClick={() => handlePrepareDetail(product._id)}>
            <Link to={PATH_ROUTES.DETAIL}>{product.name}</Link>
          </h4>
          <p>{product.brand.brandName}</p>
          <div className={styles.productBottomDetails}>
            <div className={styles.productPrice}>
              <p>$230.99</p>
            </div>
            <div className={styles.productLinks}>
      
                <OutlinedButton> <i className="fa fa-heart"></i> </OutlinedButton>
        
              <div onClick={handleAddToCart}>
                <OutlinedButton> <i className="fa fa-shopping-cart"></i> </OutlinedButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
