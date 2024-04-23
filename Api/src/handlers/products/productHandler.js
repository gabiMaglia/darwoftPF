const {
  postNewProduct,
  getAllProducts,
  desactivateProduct,
  activateProduct,
  getProductById,
  deleteProduct,
} = require("../../controllers/products/productController");

const getAllProductsHandler = async (req, res, next) => {
  try {
    const response = await getAllProducts();
    if (response) return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const getProductByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await getProductById(id);
    if (response) return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const postNewProductHandler = async (req, res, next) => {
  const { newProductData } = req.body;
  const response = await postNewProduct(newProductData);
  if (response) return res.status(200).json(response);
  try {
  } catch (error) {
    next(error);
  }
};
const updateProductHandler = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
const desactivateProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await desactivateProduct(id);
    if (response) return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
const activateProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await activateProduct(id);
    if (response) return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const deleteProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteProduct(id);
    if (response) return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllProductsHandler,
  getProductByIdHandler,
  postNewProductHandler,
  updateProductHandler,
  desactivateProductHandler,
  activateProductHandler,
  deleteProductHandler,
};
