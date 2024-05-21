import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishListAsync, removeFromWishlistAsync } from "../redux/slices/authSlice";

const useWishList = (product) => {
  const dispatch = useDispatch();
  const userWishlist = useSelector((state) => state.auth.user?.wishlist);
  const [isListed, setIsListed] = useState(userWishlist?.includes(product?._id));

  useEffect(() => {
    setIsListed(userWishlist?.includes(product?._id));
  }, [userWishlist, product?._id]);

  const handleWishList = async (productId) => {
    if (!isListed) {
      dispatch(addToWishListAsync(productId)).then(() => setIsListed(true));
    } else {
      dispatch(removeFromWishlistAsync(productId)).then(() => setIsListed(false));
    }
  };

  return [handleWishList, isListed];
};

export default useWishList;
