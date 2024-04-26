const { Router } = require("express");
const {
  getAllCategoriesHandler,
  getCategoriesByIdHandler,
  createNewCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} = require("../../handlers/products/categoryHandler");
const categoryRouter = Router();
const { isAutenticated, isAuthorized } = require("../../middleware/tokenAuthMiddlewares");

categoryRouter.route('/')
  .get(getAllCategoriesHandler)
  .post(isAutenticated, isAuthorized, createNewCategoryHandler)
categoryRouter.route('/:id')
  .get(getCategoriesByIdHandler)
  .patch( isAutenticated, isAuthorized, updateCategoryHandler)
  .delete(isAutenticated, isAuthorized, deleteCategoryHandler)


module.exports = categoryRouter;
