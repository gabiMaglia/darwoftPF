const { Router } = require("express");

const {
  isAutenticated,
  isAuthorized,
} = require("../middleware/tokenAuthMiddlewares");
const {
  getAllOrdersHandler,
  postNewOrderHandler,
  getOrderByIdHandler,
  updateOrderHandler,
} = require("../handlers/saleOrderHandler");
const {
  saleOrderValidation,
} = require("../middleware/expressValidator/validators");
const validateResults = require("../middleware/expressValidator/expressValidation");

const saleOrderRouter = Router();

saleOrderRouter
  .route("/")
  .get(getAllOrdersHandler)
  .post(
    isAutenticated,
    isAuthorized,
    saleOrderValidation,
    validateResults,
    postNewOrderHandler
  );
saleOrderRouter
  .route("/:id")
  .get(getOrderByIdHandler)
  .patch(
    isAutenticated,
    saleOrderValidation,
    validateResults,
    updateOrderHandler
  );

module.exports = saleOrderRouter;
