const { Router } = require("express");

const {
  isAutenticated,
  isAuthorized,
} = require("../middleware/tokenAuthMiddlewares");
const { getAllOrdersHandler, postNewOrderHandler, getOrderByIdHandler, updateOrderHandler } = require("../handlers/saleOrderHandler");

const saleOrderRouter = Router();

saleOrderRouter
  .route("/")
  .get(getAllOrdersHandler)
  .post(isAutenticated, isAuthorized, postNewOrderHandler);
  saleOrderRouter
  .route("/:id")
  .get(getOrderByIdHandler)
  .patch(isAutenticated, updateOrderHandler);

module.exports = saleOrderRouter;
