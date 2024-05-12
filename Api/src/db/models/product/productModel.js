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
    require: true,
  },
  productDescription: {
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
    type: Number,
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

const productCategoryGroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },

});

const productCategorySchema = new Schema({
  catName: {
    type: String,
    unique:true,
    require: true
  },
  image: {
    type: Array,
  },
  group: {
    type: mongoose.Types.ObjectId,
    ref: 'ProductCategoryGroup',
    required: true
  }
});

const productBrandSchema = new Schema({
  brandName: {
    type: String,
    unique: true
  },
  brandHomePage: {
    type: String
  },
  brandEmail: {
    type: String
  }
});

module.exports = {
  productSchema,
  productCategorySchema,
  productBrandSchema,
  productCategoryGroupSchema
};
