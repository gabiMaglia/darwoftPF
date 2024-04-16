const { Router } = require("express");
const userRouter = require("./userRoutes/userRouter");
const authRouter = require("./authRoutes/authRouter");
const jwtRouter = require("./authRoutes/jwtRouter");
const productRouter = require("./productRoutes/productRouter");


const mainRouter = Router();

mainRouter.use('/auth', authRouter)

mainRouter.use('/jwt', jwtRouter)
mainRouter.use('/user', userRouter)
mainRouter.use('/product', productRouter)


mainRouter.get("/", (req, res) => {
  res.status(400).send("llegando");
});

module.exports = mainRouter;
