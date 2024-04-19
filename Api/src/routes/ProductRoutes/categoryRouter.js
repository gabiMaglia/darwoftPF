const { Router } = require("express");
const {
  getAllCategoriesHandler,
  createNewCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} = require("../../handlers/products/categoryHandler");
const categoryRouter = Router();

categoryRouter.get("/", getAllCategoriesHandler);
categoryRouter.post("/", createNewCategoryHandler);
categoryRouter.patch("/:id", updateCategoryHandler);
categoryRouter.delete("/:id", deleteCategoryHandler);

module.exports = categoryRouter;
