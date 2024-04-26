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
const brandRouter = Router();

brandRouter
  .route("/")
  .get(getAllBrandsHandler)
  .post(isAutenticated, isAuthorized, createNewBrandHandler);
brandRouter
  .route("/:id")
  .get(getBrandByIdHandler)
  .patch(isAutenticated, isAuthorized, updateBrandHandler)
  .delete(isAutenticated, isAuthorized, deleteBrandHandler);

module.exports = brandRouter;
