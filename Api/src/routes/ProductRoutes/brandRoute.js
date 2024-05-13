const { Router } = require("express");
const {
  getAllBrandsHandler,
  createNewBrandHandler,
  updateBrandHandler,
  deleteBrandHandler,
  getBrandByIdHandler,
} = require("../../handlers/products/brandHandler");
const {
  isAutenticated,
  isAuthorized,
} = require("../../middleware/tokenAuthMiddlewares");
const {
  brandValidatino,
} = require("../../middleware/expressValidator/validators");
const validateResults = require("../../middleware/expressValidator/expressValidation");
const brandRouter = Router();

brandRouter
  .route("/")
  .get(getAllBrandsHandler)
  .post(
    isAutenticated,
    isAuthorized,
    brandValidatino,
    validateResults,
    createNewBrandHandler
  );
brandRouter
  .route("/:id")
  .get(getBrandByIdHandler)
  .put(
    isAutenticated,
    isAuthorized,
    brandValidatino,
    validateResults,
    updateBrandHandler
  )
  .delete(isAutenticated, isAuthorized, deleteBrandHandler);

module.exports = brandRouter;
