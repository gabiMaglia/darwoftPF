const { ProductBrand, Product, ProductCategoryGroup, ProductCategory } = require("../db/conn");

const getInitialData = async () => {
    console.log("llego")
  const brands = await ProductBrand.find();
  const categoryGroup = await ProductCategoryGroup.find();
  const products = await Product.find()
    .populate("category")
    .populate("brand")
  const categories = await ProductCategory.find().populate("group")

  const data = {brands, categoryGroup, products, categories }

  return data
};

module.exports = { getInitialData };
