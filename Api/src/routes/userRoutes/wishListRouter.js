const { Router } = require("express");
const {
  addProductToWishListHandler,
  deleteProductFromWishlistHandler,
} = require("../../handlers/users/wishlistHandler");
const { checkAuthToken } = require("../../middleware/tokenAuthMiddlewares");

const wishListRouter = Router();

wishListRouter.patch("/add/:id", checkAuthToken, addProductToWishListHandler);
wishListRouter.patch("/remove/:id", checkAuthToken, deleteProductFromWishlistHandler);

module.exports = wishListRouter;
