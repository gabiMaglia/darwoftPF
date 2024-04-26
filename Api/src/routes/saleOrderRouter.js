const { Router } = require("express");

const {
  isAutenticated,
  isAuthorized,
} = require("../middleware/tokenAuthMiddlewares");

const saleOrderRouter = Router();

// salesOrderRouter
//   .route("/")
//   .get(getAllOrders)
//   .post(isAutenticated, isAuthorized, postNewOrderHandler);
// salesOrderRouter
//   .route("/:id")
//   .get(getOrderById)
//   .patch(isAutenticated, updateOrderHandler);

module.exports = saleOrderRouter;
