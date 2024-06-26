const errors = require("../../utils/errors");
const { Product } = require("../../db/conn");

// GET
const getAllProducts = async (params = {}) => {
  const { offset = 0, limit = 0, isFeatured, filter } = params;

  const existingProductCount = await Product.countDocuments();
  if (existingProductCount < 1)
    throw new Error(errors.product.productsNotFound);

  const query = {};
  isFeatured ? (query.isFeatured = isFeatured) : null;
  filter ? Object.assign(query, JSON.parse(filter)) : null;

  const products = await Product.find(query)
    .populate("category")
    .populate("brand")
    .skip(offset)
    .limit(limit);

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

// POST
const postNewProduct = async (productData) => {
  try {
    const {
      name,
      price,
      images,
      productDescription,
      stock,
      category,
      brand,
      soldCount = 0,
      isActive,
      isFeatured,
    } = productData;

    const newProduct = new Product({
      name,
      price,
      images,
      productDescription,
      isActive,
      isFeatured,
      soldCount,
      stock,
      category,
      brand,
    });
    await newProduct.save();
    const populatedProduct = await Product.findById(newProduct._id)
    .populate("category")
    .populate("brand");

  return populatedProduct;
  } catch (error) {
    throw new Error("");
  }
};
// UPDATE
const updateProduct = async (id, productData) => {
  const currentProduct = await Product.findById(id);
  if (!currentProduct) {
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      $set: productData,
    },
    { new: true, runValidators: true }
  )
    .populate("category")
    .populate("brand");

  return updatedProduct;
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
