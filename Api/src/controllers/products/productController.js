const { Product, ProductCategory, ProductBrand } = require("../../db/conn");

// GET
const getAllProducts = async () => {
  const existingProductCount = await Product.countDocuments();
  if (existingProductCount < 1) throw new Error("Products not found");

  const products = await Product.find().populate("category").populate("brand");

  return { error: false, response: products };
};
const getProductById = async (id) => {
  const existingUsersCount = await Product.countDocuments();
  if (existingUsersCount < 1) throw new Error("Product not found");

  const product = await Product.findOne({ _id: id })
    .populate("category")
    .populate("brand");

  if (!product) throw new Error("Product not found");

  return { error: false, response: product };
};
// POST
const postNewProduct = async (newProductData) => {
  const {
    name,
    price,
    images,
    productDescription,
    warranty = null,
    productStock,
    productCategory,
    productBrand,
    soldCount = 0,
    isActive = true,
    isFeatured = false,
  } = newProductData;

  const { catName, image } = productCategory;
  const { brandName, brandHomePage } = productBrand;

  const newProduct = new Product({
    name,
    price,
    images,
    productDescription,
    warranty,
    stock: productStock,
    soldCount,
    isActive,
    isFeatured,
  });

  let cat = await ProductCategory.findOne({ name: catName });
  if (!cat) {
    cat = new ProductCategory({
      catName,
      image,
    });
    await cat.save();
  }
  newProduct.category = cat._id;

  let brand = await ProductBrand.findOne({ name: brandName });
  if (!brand) {
    brand = new ProductBrand({
      brandName,
      brandHomePage,
    });
    await brand.save();
  }
  newProduct.brand = brand._id;

  await newProduct.save();
  return newProduct;
};
// UPDATE
const updateProduct = async (newUserData) => {};
// DELETE
const desactivateProduct = async (id) => {
  await Product.findOneAndUpdate({ _id: id, isActive: false });
  return { error: false, response: "Product is now Desactived" };
};
const activateProduct = async (id) => {
  await Product.findOneAndUpdate({ _id: id, isActive: true });
  return { error: false, response: "Product is now Active" };
};
const deleteProduct = async (id) => {
  const { deletedCount } = await Product.deleteOne({
    _id: id,
  });
  return { error: false, response: "Product deleted" };
};
module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
  updateProduct,
  desactivateProduct,
  activateProduct,
  deleteProduct,
};
