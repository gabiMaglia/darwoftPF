const { Router } = require("express");
const {
  getUserHandler,
  getUserbyIdHandler,
  postUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../../handlers/users/userHandler");

const productCartRouter = require("./productCartRouter");
const wishListRouter = require("./wishListRouter");

const userRouter = Router();

// TODO agrupar en punto route 
userRouter.get("/", getUserHandler);
userRouter.get("/:id", getUserbyIdHandler);
userRouter.patch("/:id", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

userRouter.post("/", postUserHandler);

userRouter.use("/wishlist", wishListRouter);
userRouter.use("/productCart", productCartRouter);

module.exports = userRouter;
