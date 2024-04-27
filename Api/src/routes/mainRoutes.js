const { Router } = require("express");

const userRouter = require("./userRoutes/userRouter");
const authRouter = require("./authRoutes/authRouter");
const productRouter = require("./productRoutes/productRouter");
const brandRouter = require("./ProductRoutes/brandRoute");
const categoryRouter = require("./ProductRoutes/categoryRouter");
const wishListRouter = require("./userRoutes/wishListRouter");
const saleOrderRouter = require("./saleOrderRouter");

const mainRouter = Router();

mainRouter.use("/auth", authRouter);

mainRouter.use("/user", userRouter);
mainRouter.use("/wish", wishListRouter);

mainRouter.use("/product", productRouter);
mainRouter.use("/brand", brandRouter);
mainRouter.use("/cat", categoryRouter);

mainRouter.use("/order", saleOrderRouter)

module.exports = mainRouter;
