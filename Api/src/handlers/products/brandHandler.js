const { getAllBrands, createNewBrand, updateBrand, deleteBrand, getBrandById } = require("../../controllers/products/brandController");
const getAllBrandsHandler = async (req, res, next) => {
    try {
      const response = await getAllBrands()
      return res.status(200).json({ error: false, message:response });
    } catch (error) {
      next(error);
    }
  };
const getBrandByIdHandler = async (req, res, next) => {
    try {
      const {id} = req.params
      const response = await getBrandById(id)
      return res.status(200).json({ error: false, response });
    } catch (error) {
      next(error);
    }
  };
  const createNewBrandHandler = async (req, res, next) => {
    try {
      const {brandData} = req.body
      const response = await createNewBrand(brandData)
      return res.status(200).json({ error: false, response });
    } catch (error) {
      next(error);
    }
  };
  const updateBrandHandler = async (req, res, next) => {
    try {
      const {id} = req.params
      const {brandData} = req.body
      const response = await updateBrand(id, brandData)
      return res.status(200).json({ error: false, response });
    } catch (error) {
      next(error);
    }
  };
  const deleteBrandHandler = async (req, res, next) => {
    try {
      const {id} = req.params
      const response = await deleteBrand(id)
      return res.status(200).json({ error: false, response });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = {
    getAllBrandsHandler,
    getBrandByIdHandler,
    createNewBrandHandler,
    updateBrandHandler,
    deleteBrandHandler,
  };
  