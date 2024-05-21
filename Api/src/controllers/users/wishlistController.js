const { User, Product } = require("../../db/conn");
const errors = require("../../utils/errors");

const addProductToWishList = async (userId, productId) => {

  const newProduct = await Product.findById(productId)
  if (!newProduct) {
    throw new Error(errors.product.productNotFound);
  }
  const response = await User.findByIdAndUpdate(
    {_id: userId},
    { $addToSet: { wishlist:  newProduct } },
    { new: true, select: 'wishlist' }
  );
  
  console.log({response:response})
  return response;
};
const deleteProductFromWishList = async (userId, productId) => {
  const newProduct = await Product.findById(productId)
  if (!newProduct) {
    throw new Error(errors.product.productNotFound);
  }
  const response = await User.findByIdAndUpdate(
    userId,
    { $pull:  { wishlist:  productId } },
    { new: true, select: 'wishlist' }
  );

  return true;
};

module.exports = {
  addProductToWishList,
  deleteProductFromWishList,
};
