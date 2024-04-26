const { Router } = require("express");
const {
  getUserHandler,
  getUserbyIdHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../../handlers/users/userHandler");

const wishListRouter = require("./wishListRouter");
const { isAutenticated } = require("../../middleware/tokenAuthMiddlewares");

const userRouter = Router();

userRouter.route('/')
  .get(getUserHandler)
  .delete(isAutenticated, deleteUserHandler)
userRouter.route('/:id')
  .get(getUserbyIdHandler)
  .patch( isAutenticated, updateUserHandler)

userRouter.use("/wishlist",  wishListRouter);
 

module.exports = userRouter;
