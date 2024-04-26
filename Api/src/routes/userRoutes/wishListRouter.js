const { Router } = require("express");
const {
  addProductToWishListHandler,
  deleteProductFromWishlistHandler,
} = require("../../handlers/users/wishlistHandler");
const {  isAutenticated } = require("../../middleware/tokenAuthMiddlewares");
const wishListRouter = Router();

wishListRouter.patch("/add", isAutenticated, addProductToWishListHandler);
wishListRouter.patch("/remove", isAutenticated, deleteProductFromWishlistHandler);

module.exports = wishListRouter;
