const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  images: {
    type: Array,
  },
  productDescription: {
    type: Map,
    of: String,
  },
  warranty: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  soldCount: {
    type: Number,
    default: 0,
  },
  stock: {
    type: mongoose.Types.ObjectId,
    ref: "ProductStock",
    require: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "ProductCategory",
    require: true,
  },
  brand: {
    type: mongoose.Types.ObjectId,
    ref: "ProductBrand",
    require: true,
  },
});

const productStockSchema = new Schema({
  stock: {
    type: Number,
    default: 0,
  },
});
const productCategorySchema = new Schema({
  name: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
});
const productBrandSchema = new Schema({
  name: {
    type: Number,
    default: 0,
  },
});

module.exports = {
  productSchema,
  productStockSchema,
  productCategorySchema,
  productBrandSchema,
};
