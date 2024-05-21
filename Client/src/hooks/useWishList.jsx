import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToWishListAsync, removeFromWishlistAsync } from "../redux/slices/authSlice";


const useWishList = (product) => {
    const [isListed, setIsListed] = useState(product?.isListed)
    const dispatch = useDispatch()

    const handleSetListed = () => {
        setIsListed(!isListed)
      }

    const handleWishList = async (productId) => {
        !product.isListed
          ? await dispatch(addToWishListAsync(productId))
          : await dispatch(removeFromWishlistAsync(productId));
      };

  return [handleWishList, isListed, handleSetListed]
}

export default useWishList