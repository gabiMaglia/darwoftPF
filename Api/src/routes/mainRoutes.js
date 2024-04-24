const { Router } = require("express");
const userRouter = require("./userRoutes/userRouter");
const authRouter = require("./authRoutes/authRouter");
const jwtRouter = require("./authRoutes/jwtRouter");
const productRouter = require("./productRoutes/productRouter");
const brandRouter = require("./ProductRoutes/brandRoute");
const categoryRouter = require("./ProductRoutes/categoryRouter");
const wishListRouter = require("./userRoutes/wishListRouter");


const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/jwt", jwtRouter);

mainRouter.use("/user", userRouter);
mainRouter.use("/wish", wishListRouter);


mainRouter.use("/product", productRouter);
mainRouter.use("/brand", brandRouter);
mainRouter.use("/cat", categoryRouter);


module.exports = mainRouter;
