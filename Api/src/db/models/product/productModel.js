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
    type: Array,
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


const productCategorySchema = new Schema({
  catName: {
    type: String,
    unique:true
  },
  image: {
    type: String,
  },
});
const productBrandSchema = new Schema({
  brandName: {
    type: String,
    unique: true
  },
  brandHomePage: {
    type: String
  }
});

module.exports = {
  productSchema,

  productCategorySchema,
  productBrandSchema,
};
