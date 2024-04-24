const { User } = require("../../db/conn");

const addProductToWishList = async (userId, productArr) => {
  const response = await User.findByIdAndUpdate(
    {_id: userId},
    { $addToSet: { wishlist: { $each: productArr } } },
    { new: true, select: 'wishlist' }
  );
  
  return response;
};
const deleteProductFromWishList = async (userId, productArr) => {
  const response = await User.findByIdAndUpdate(
    userId,
    { $pullAll: { wishlist: productArr } },
    { new: true, select: 'wishlist' }
  );

  return response;
};

module.exports = {
  addProductToWishList,
  deleteProductFromWishList,
};
