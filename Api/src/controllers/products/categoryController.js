const { ProductCategory } = require("../../db/conn");

// GET
const getAllCategories = async () => {
    const existingCategoryCount = await ProductCategory.countDocuments();
    if (existingCategoryCount < 1) throw new Error("Category not found");
  
    const categories = await ProductCategory.find()
  
    return { error: false, response: categories };
};
// POST
const postNewCategory = async (newCategoryData) => {};
// UPDATE
const updateCategory = async (UpdateCategoryData, id) => {};
// DELETE
const deleteCategory = async (id) => {};

module.exports = {
    getAllCategories,
    postNewCategory,
    updateCategory,
    deleteCategory
}