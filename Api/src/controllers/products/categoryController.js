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
  console.log("llego al controller");
  const { catName, image, group } = categoryData;
  const newCategory = new ProductCategory({
    catName,
    image,
  });
  const isGroup = await ProductCategoryGroup.findOne({ name: group });
  if (isGroup) {
    newCategory.group = isGroup._id;
  } else {
    const newGroup = await ProductCategoryGroup.create({
      name: group,
    });
    newCategory.group = newGroup._id;
  }
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
  let catGroup;
  const { catName, image, group } = categoryData;

  if (group) catGroup = await ProductCategoryGroup.findOne({ name: group })._id;
  catGroup = await postNewCategoryGroup({ name: group }).id;

  const response = await ProductCategory.findByIdAndUpdate(
    id,
    {
      catName,
      image,
      catGroup,
    },
    { new: true }
  );

  return response;
};
const updateCategoryGroup = async (UpdateCategoryGroupData, id) => {
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
