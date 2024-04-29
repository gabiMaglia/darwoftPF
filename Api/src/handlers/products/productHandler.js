const {
  postNewProduct,
  getAllProducts,
  getProductById,
  toggleProductState,
  deleteProduct,
  updateProduct,
} = require("../../controllers/products/productController");

const getAllProductsHandler = async (req, res, next) => {
  try {
    const params = req.query
    const response = await getAllProducts(params);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const getProductByIdHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await getProductById(id);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const postNewProductHandler = async (req, res, next) => {
  const { productData } = req.body;
  const response = await postNewProduct(productData);
  if (response)
    return res.status(200).json({ error: false, message: response });
  try {
  } catch (error) {
    next(error);
  }
};
const updateProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { productData } = req.body;
    const response = await updateProduct(id, productData);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
const toggleProducStateHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await toggleProductState(id);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};

const deleteProductHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteProduct(id);
    if (response)
      return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllProductsHandler,
  getProductByIdHandler,
  postNewProductHandler,
  updateProductHandler,
  toggleProducStateHandler,
  deleteProductHandler,
};
