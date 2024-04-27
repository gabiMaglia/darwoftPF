const errors = require('../../utils/errors')

const { ProductBrand, Product } = require("../../db/conn");

// GET
const getAllBrands = async () => {
  const existingBrandCount = await ProductBrand.countDocuments();
  if (existingBrandCount < 1) throw new Error(errors.product.brandsNotFound);

  const brands = await ProductBrand.find();
  if (!brands) throw new Error(errors.product.brandsNotFound)
  return brands;
};
const getBrandById = async (id) => {
  const brand = await ProductBrand.findById(id);
  if (!brand) throw new Error(errors.product.brandNotFound);
  return brand;
};
// POST
const createNewBrand = async (brandData) => {
  const { brandName, brandHomePage } = brandData;
  const newBrand = new ProductBrand({
    brandName,
    brandHomePage,
  });
  await newBrand.save();
  return newBrand;
};
// UPDATE
const updateBrand = async (id, brandData) => {
  const { brandName, brandHomePage } = brandData;
  const response = await ProductBrand.findByIdAndUpdate(
    id,
    {
      brandName,
      brandHomePage,
    },
    { new: true }
  );
  return response;
};
// DELETE
const deleteBrand = async (id) => {
  const areProductsThatBelongsToThisBrand = await Product.find({ brand: id });

  if (areProductsThatBelongsToThisBrand.length !== 0)
    throw new Error(
        errors.product.remainingProductsInBrand
    );

  await ProductBrand.findByIdAndDelete(id);
  return "Brand deleted";
};

module.exports = {
  getAllBrands,
  getBrandById,
  createNewBrand,
  updateBrand,
  deleteBrand,
};
