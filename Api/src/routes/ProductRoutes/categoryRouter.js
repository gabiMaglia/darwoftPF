const { Router } = require("express");
const {
  getAllCategoriesHandler,
  getCategoriesByIdHandler,
  postCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getAllCategoryGroupsHandler,
  postCategoryGroupHandler,
  updateCategoryGroupsHandler,
  deleteCategoryGroupHandler
} = require("../../handlers/products/categoryHandler");
const categoryRouter = Router();
const {
  isAutenticated,
  isAuthorized,
} = require("../../middleware/tokenAuthMiddlewares");
const { categoryValidation } = require("../../middleware/expressValidator/validators");
const validateResults = require("../../middleware/expressValidator/expressValidation");

categoryRouter
  .route('/group')
  .get(getAllCategoryGroupsHandler)
  .post(isAutenticated, isAuthorized,  postCategoryGroupHandler)
categoryRouter
  .route('/group/:id')
  .put(isAutenticated, isAuthorized,  updateCategoryGroupsHandler)
  .delete(isAutenticated, isAuthorized,  deleteCategoryGroupHandler)
categoryRouter
  .route("/")
  .get(getAllCategoriesHandler)
  .post(isAutenticated, isAuthorized, categoryValidation, validateResults, postCategoryHandler);
categoryRouter
  .route("/:id")
  .get(getCategoriesByIdHandler)
  .patch(isAutenticated, isAuthorized, categoryValidation, validateResults, updateCategoryHandler)
  .delete(isAutenticated, isAuthorized, deleteCategoryHandler);
module.exports = categoryRouter;
