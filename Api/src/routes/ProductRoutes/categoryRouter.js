const { Router } = require("express");
const {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
} = require("../../handlers/products/categoryHandler");
const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:id", getCategoryById);

categoryRouter.post("/", createNewCategory);
categoryRouter.patch("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;
