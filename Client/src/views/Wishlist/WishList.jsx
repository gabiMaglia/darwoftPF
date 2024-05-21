import { useSelector } from "react-redux";
import ProductBoard from "../../componenets/ProductBoard/ProductBoard";

import styles from "./wishList.module.css"

const WishList = () => {
  const userWishlist = useSelector((state) => state.auth.user.wishlist);
  const products = useSelector((state) => state.products.products);

  const listedProducts = userWishlist.reduce((acc, e) => {
    const product = products.find(f => f._id == e);
    if (product) {
      acc.push({...product, isListed: true});
    }
    return acc;
  }, []);


  return (
    <div className={styles.wishlistCont} >
      <ProductBoard products={listedProducts} />
    </div>
  );
};

export default WishList;
