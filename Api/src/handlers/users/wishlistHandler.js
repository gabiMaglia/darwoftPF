const {
  addProductToWishList,
  deleteProductFromWishList,
} = require("../../controllers/users/wishlistController");

const addProductToWishListHandler = async (req, res, next) => {
  try {
    const  id  = req.userId;
    console.log(id)
    const { productArr } = req.body;
    const response = await addProductToWishList(id, productArr);
    res.status(200).json({ error: false, message: response}) ;
  } catch (error) {
    next(error);
  }
};
const deleteProductFromWishlistHandler = async (req, res, next) => {
  try {
    const  id  = req.userId;
    const { productArr } = req.body;
    const response = await deleteProductFromWishList(id, productArr);
    res.status(200).json ({ error: false, message: response});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProductToWishListHandler,
  deleteProductFromWishlistHandler,
};
