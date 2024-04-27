const { Router } = require("express");
const {
  getAllCategoriesHandler,
  getCategoriesByIdHandler,
  createNewCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} = require("../../handlers/products/categoryHandler");
const categoryRouter = Router();
const {
  isAutenticated,
  isAuthorized,
} = require("../../middleware/tokenAuthMiddlewares");
const { categoryValidation } = require("../../middleware/expressValidator/validators");
const validateResults = require("../../middleware/expressValidator/expressValidation");

categoryRouter
  .route("/")
  .get(getAllCategoriesHandler)
  .post(isAutenticated, isAuthorized, categoryValidation, validateResults, createNewCategoryHandler);
categoryRouter
  .route("/:id")
  .get(getCategoriesByIdHandler)
  .patch(isAutenticated, isAuthorized, categoryValidation, validateResults, updateCategoryHandler)
  .delete(isAutenticated, isAuthorized, deleteCategoryHandler);

module.exports = categoryRouter;
