const errors = require("../../utils/errors");
const {
  ProductCategory,
  Product,
  ProductCategoryGroup,
} = require("../../db/conn");

// GET
const getAllCategories = async () => {
  const existingCategoryCount = await ProductCategory.countDocuments();
  if (existingCategoryCount < 1)
    throw new Error(errors.product.categoriesNotFound);

  const categories = await ProductCategory.find().populate("group").exec();

  return categories;
};
const getAllCategoryGroups = async () => {
  const existingCategoryCount = await ProductCategoryGroup.countDocuments();
  if (existingCategoryCount < 1)
    throw new Error(errors.product.categoriesNotFound);

  const categoryGroup = await ProductCategoryGroup.find();

  return categoryGroup;
};
const getCategoryById = async (id) => {
  const category = await ProductCategory.findById(id);
  if (!category) throw new Error(errors.product.categoryNotFound);

  return category;
};
// POST
const postNewCategory = async (categoryData) => {
  const { catName, group } = categoryData;
  console.log(group);

  const newCategory = new ProductCategory({
    catName,
  });
  const isGroup = await ProductCategoryGroup.findOne({ _id: group });
  if (isGroup) newCategory.group = isGroup._id;
  await newCategory.save();

  return newCategory;
};

const postNewCategoryGroup = async ({ name }) => {
  console.log(name);
  const newCategoryGroup = new ProductCategoryGroup({
    name,
  });
  await newCategoryGroup.save();

  return newCategoryGroup;
};
// UPDATE
const updateCategory = async (id, categoryData) => {
  console.log({catego: categoryData})
  const { catName, group } = categoryData;
  console.log("group")
  const catGroup = await ProductCategoryGroup.findById( group );
  console.log("CAT")
  console.log(catGroup)
  
  const response = await ProductCategory.findByIdAndUpdate(
    id,
    {
      catName,
      catGroup,
    },
    { new: true }
  );
  
  console.log(response)
  return response;
};
const updateCategoryGroup = async (id, UpdateCategoryGroupData) => {
  const { name } = UpdateCategoryGroupData;
  const response = await ProductCategoryGroup.findByIdAndUpdate(
    id,
    {
      name: name,
    },
    { new: true }
  );

  return response;
};
// DELETE
const deleteCategory = async (id) => {
  const areProdcutsThatBelongsToThisCategory = await Product.find({
    category: id,
  });

  if (areProdcutsThatBelongsToThisCategory.length !== 0) {
    throw new Error(errors.product.remainingProductsInCategory);
  }
  // FIND BY ID AND DELETE SI NO ENCUENTA DEVUELVE NULL POR ENDE SI NO EXISTE EL REGISTRO NO VA A CAER EN EL CATCH
  const deletedGroup = await ProductCategory.findByIdAndDelete(id);
  if (!deletedGroup) throw new Error(errors.product.categoryNotFound);
  return "Category deleted";
};
const deleteCategoryGroup = async (id) => {
  const areCategoriesThatBelongsToThisGroup = await ProductCategory.find({
    group: id,
  });
  console.log(areCategoriesThatBelongsToThisGroup);

  if (areCategoriesThatBelongsToThisGroup.length !== 0) {
    throw new Error(errors.product.remainingCategoriesInGroup);
  }
  const deletedProduct = await ProductCategoryGroup.findByIdAndDelete(id);
  if (!deletedProduct) throw new Error(errors.product.categoryNotFound);
  return "Category Group deleted";
};

module.exports = {
  getCategoryById,
  getAllCategories,
  getAllCategoryGroups,
  postNewCategory,
  postNewCategoryGroup,
  updateCategory,
  updateCategoryGroup,
  deleteCategory,
  deleteCategoryGroup,
};
