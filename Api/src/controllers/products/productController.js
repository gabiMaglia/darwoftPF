const errors = require("../../utils/errors");
const { Product, ProductCategory, ProductBrand, ProductCategoryGroup } = require("../../db/conn");

// GET
const getAllProducts = async () => {
  const existingProductCount = await Product.countDocuments();
  if (existingProductCount < 1)
    throw new Error(errors.product.productsNotFound);

  const products = await Product.find().populate("category").populate("brand");

  return products;
};
const getProductById = async (id) => {
  const existingUsersCount = await Product.countDocuments();
  if (existingUsersCount < 1) throw new Error(errors.product.productNotFound);

  const product = await Product.findOne({ _id: id })
    .populate("category")
    .populate("brand");

  if (!product) throw new Error(errors.product.productsNotFound);

  return product;
};
const getProductByCatBrand = async (catBrand, id) => {
  const products = await Product.find({ [catBrand]: id })
    .populate("category")
    .populate("brand");
  if (!products) throw new Error(errors.product.productsNotFound);
  return products;
};

// POST
const postNewProduct = async (productData) => {
  const {
    name,
    price,
    images,
    productDescription,
    warranty = null,
    productStock,
    categoryGroup,
    productCategory,
    productBrand,
    soldCount = 0,
    isActive = true,
    isFeatured = false,
  } = productData;

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

  let cat = await ProductCategory.findOne({ catName: catName });

  if (!cat) {
    cat = new ProductCategory({
      catName,
      image,
    });
    let catGroup = await ProductCategoryGroup.findOne({ name: categoryGroup });

    if (!catGroup) {
      catGroup = new ProductCategoryGroup({
        name: categoryGroup,
      });
      await catGroup.save();
    }
  
    cat.group = catGroup._id;
    await cat.save();
  }

  newProduct.category = cat._id;

 


  let brand = await ProductBrand.findOne({ brandName: brandName });

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
const updateProduct = async (id, productData) => {
  console.log(productData);
  const {
    name,
    price,
    images,
    productDescription,
    warranty,
    productStock,
    productCategory,
    productBrand,
    soldCount,
    isActive,
    isFeatured,
  } = productData;
  const { catName, image } = productCategory;
  const { brandName, brandHomePage } = productBrand;

  const product = new Product({
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

  let cat = await ProductCategory.findOne({ catName: catName });

  if (!cat) {
    cat = new ProductCategory({
      catName,
      image,
    });
    await cat.save();
  }
  product.category = cat._id;
  let brand = await ProductBrand.findOne({ brandName: brandName });

  if (!brand) {
    brand = new ProductBrand({
      brandName,
      brandHomePage,
    });
    await brand.save();
  }
  product.brand = brand._id;

  await product.save();
  return product;
};
// DELETE
const toggleProductState = async (id) => {
  const dbProduct = await Product.findById(id);
  await Product.findOneAndUpdate({ _id: id, isActive: !dbProduct.isActive });
  return `Product is now ${dbProduct.isActive ? "Desactived" : "Activated"} `;
};
const deleteProduct = async (id) => {
  await Product.findByIdAndDelete(id);
  return "Product deleted";
};
module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
  updateProduct,
  toggleProductState,
  deleteProduct,
};
