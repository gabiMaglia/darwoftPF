const {
  getAllCategories,
  postNewCategory,
  updateCategory,
  deleteCategory,
} = require("../../controllers/products/categoryController");

const getAllCategoriesHandler = async (req, res, next) => {
  try {
    const response = await getAllCategories();
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};

const createNewCategoryHandler = async (req, res, next) => {
  try {
    const { newCategory } = req.body;
    const response = await postNewCategory(newCategory);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const updateCategoryHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { brandData } = req.body;
    const response = await updateCategory(id, brandData);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const deleteCategoryHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteCategory(id);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategoriesHandler,
  createNewCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
};
