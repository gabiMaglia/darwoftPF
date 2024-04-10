const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(400).send("llegando");
});

module.exports = mainRouter;
