const {postNewProduct, getAllProducts} = require('../../controllers/products/productController')

const getAllProductsHandler = async(req, res, next) => {
  try {
    const { response } = await getAllProducts();
    return res.status(200).json({ error: false, message: response });
  } catch (error) { next(error) }
};
const getProductByIdHandler = async(req, res, next) => {
  try {
  } catch (error) { next(error) }
};
const postNewProductHandler = async(req, res, next) => {
  const {newProductData} = req.body
  // console.log(newProductData)
  const response = await postNewProduct(newProductData)
  if (response) return res.status(200).json(response)
  try {
  } catch (error) { next(error) }
};
const updateProductHandler = async(req, res, next) => {
  try {
  } catch (error) { next(error) }
};
const deleteProductHandler = async(req, res, next) => {
  try {
  } catch (error) { next(error) }
};
module.exports = {
  getAllProductsHandler,
  getProductByIdHandler,
  postNewProductHandler,
  updateProductHandler,
  deleteProductHandler,
};
