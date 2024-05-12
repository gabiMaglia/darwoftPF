const {
  getAllCategories,
  postNewCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
  getAllCategoryGroups,
  postNewCategoryGroup,
  deleteCategoryGroup,
  updateCategoryGroup
} = require("../../controllers/products/categoryController");

const getAllCategoriesHandler = async (req, res, next) => {
  try {
    const response = await getAllCategories();
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const getAllCategoryGroupsHandler = async (req, res, next) => {
  try {
    const response = await getAllCategoryGroups();
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const getCategoriesByIdHandler = async (req, res, next) => {
  try {
    const {id} = req.params
    const response = await getCategoryById(id);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};

const postCategoryHandler = async (req, res, next) => {
  try {
    const { categoryData } = req.body;
    console.log("llego alcategoryData")
    const response = await postNewCategory(categoryData);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const postCategoryGroupHandler = async (req, res, next) => {
  try {
  
    const { catGroupData } = req.body;
    const response = await postNewCategoryGroup(catGroupData);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const updateCategoryHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { categoryData } = req.body;
    const response = await updateCategory(id, categoryData);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const updateCategoryGroupsHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { catGroupData } = req.body;
    const response = await updateCategoryGroup(id, catGroupData);
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
const deleteCategoryGroupHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteCategoryGroup(id);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategoriesHandler,
  getAllCategoryGroupsHandler,
  getCategoriesByIdHandler,
  postCategoryHandler,
  postCategoryGroupHandler,
  updateCategoryHandler,
  updateCategoryGroupsHandler,
  deleteCategoryHandler,
  deleteCategoryGroupHandler
};
