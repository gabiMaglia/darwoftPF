import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import PATH_ROUTES from "../../helpers/routes.helper";
import { useSelector } from "react-redux";
import styles from './shoppingCart.module.css'
const ShoppingCart = () => {
  const totalAmount = useSelector((state) => state.cartSlice.cartTotalItems);
  const isEmpty = totalAmount === 0
  return (
    <Link to={PATH_ROUTES.SHOPPINGCART}>
    <div className={styles.shoppingCartCont}>
      <ShoppingBagIcon className={styles.icon} />\
     { !isEmpty && <i className={styles.shoppingCartAmmount}>{totalAmount}</i>}
    
    </div>
    </Link>
    
  )
}

export default ShoppingCart