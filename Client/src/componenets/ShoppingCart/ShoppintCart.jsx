import styles from './shoppingCart.module.css'
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
const ShoppingCart = () => {
  return (
    <>
    <ShoppingBagIcon className={styles.icon} />
    </>
  )
}

export default ShoppingCart