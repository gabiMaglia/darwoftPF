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
          ?  dispatch(addToWishListAsync(productId)).then(()=> {handleSetListed})
          :  dispatch(removeFromWishlistAsync(productId)).then(()=> {handleSetListed});
      };

  return [handleWishList, isListed ]
}

export default useWishList