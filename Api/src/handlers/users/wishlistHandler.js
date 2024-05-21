const {
  addProductToWishList,
  deleteProductFromWishList,
} = require("../../controllers/users/wishlistController");

const addProductToWishListHandler = async (req, res, next) => {
  try {
    const  id  = req.userId;
    const { productId } = req.body;
    console.log(productId)
    const response = await addProductToWishList(id, productId);
    res.status(200).json({ error: false, message: response}) ;
  } catch (error) {
    next(error);
  }
};
const deleteProductFromWishlistHandler = async (req, res, next) => {
  try {
    const  id  = req.userId;
    const { productId } = req.body;
    const response = await deleteProductFromWishList(id, productId);
    res.status(200).json ({ error: false, message: response});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProductToWishListHandler,
  deleteProductFromWishlistHandler,
};
