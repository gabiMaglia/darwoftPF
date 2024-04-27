const { Router } = require("express");
const {
  isAutenticated,
  isAuthorized,
} = require("../../middleware/tokenAuthMiddlewares");
const {
  getAllProductsHandler,
  getProductByIdHandler,
  postNewProductHandler,
  toggleProducStateHandler,
  updateProductHandler,
  deleteProductHandler,
} = require("../../handlers/products/productHandler");
const {
  productValidation,
} = require("../../middleware/expressValidator/validators");
const validateResults = require("../../middleware/expressValidator/expressValidation");

const porductRouter = Router();

porductRouter
  .route("/")
  .get(getAllProductsHandler)
  .post(
    isAutenticated,
    isAuthorized,
    productValidation,
    validateResults,
    postNewProductHandler
  );
porductRouter
  .route("/:id")
  .get(getProductByIdHandler)
  .patch(
    isAutenticated,
    productValidation,
    validateResults,
    updateProductHandler
  )
  .delete(isAutenticated, isAuthorized, deleteProductHandler);

porductRouter.patch(
  "/toogle_state/:id",
  isAutenticated,
  isAuthorized,
  toggleProducStateHandler
);

module.exports = porductRouter;
