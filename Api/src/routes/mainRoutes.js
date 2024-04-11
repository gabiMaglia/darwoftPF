const { Router } = require("express");
const userRouter = require("./userRoutes/userRouter");

const mainRouter = Router();

mainRouter.use('/user', userRouter)

mainRouter.get("/", (req, res) => {
  res.status(400).send("llegando");
});

module.exports = mainRouter;
