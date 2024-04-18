const { ProductBrand } = require("../../db/conn");

// GET
const getAllBrands = async () => {
    const existingBrandCount = await ProductBrand.countDocuments();
    if (existingBrandCount < 1) throw new Error("Brand not found");
  
    const users = await ProductBrand.find()
  
    return { error: false, response: users };
};
// POST
const createNewBrand = async (newBrandData) => {};
// UPDATE
const updateBrand = async (newBrandData) => {};
// DELETE
const deleteBrand = async (id) => {};

module.exports = {
    getAllBrands,
    createNewBrand,
    updateBrand,
    deleteBrand
}