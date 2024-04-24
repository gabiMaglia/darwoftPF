const errors = require("../../utils/errors");
const { ProductCategory, Product } = require("../../db/conn");

// GET
const getAllCategories = async () => {
  const existingCategoryCount = await ProductCategory.countDocuments();
  if (existingCategoryCount < 1) throw new Error(errors.product.categoriesNotFound);

  const categories = await ProductCategory.find();

  return categories;
};
const getCategoryById = async (id) => {
  const category = await ProductCategory.findById(id);
  if (!category) throw new Error(errors.product.categoryNotFound)
  return category;
};
// POST
const postNewCategory = async (newCategoryData) => {
  const { catName, image } = newCategoryData;
  const newCategory = new ProductCategory({
    catName,
    image,
  });
  await newCategory.save();
  return newCategory;
};
// UPDATE
const updateCategory = async (UpdateCategoryData, id) => {
  const { catName, image } = UpdateCategoryData;
  const response = await ProductCategory.findByIdAndUpdate(
    id,
    {
      catName, image
    },
    { new: true }
  )
  return response;
};
// DELETE
const deleteCategory = async (id) => {
  const areProdcutsThatBelongsToThisCategory = await Product.find({category:id})

  if (areProdcutsThatBelongsToThisCategory.length !== 0) {
    throw new Error (
      errors.product.remainingProductsInCategory
    )
  }
  await ProductCategory.findByIdAndDelete(id);
  return "Category deleted";

};

module.exports = {
  getAllCategories,
  postNewCategory,
  updateCategory,
  deleteCategory,
  getCategoryById
};
