const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const {
  userSchema,
  credentialSchema,
  roleSchema,
  userAdressSchema,
} = require("./models/user/userModel");
const {
  productSchema,
  productBrandSchema,
  productCategorySchema,
  productCategoryGroupSchema
} = require("./models/product/productModel");
const { saleOrderModel } = require("./models/saleOrder");
const tokenWhiteListSchema = require("./models/auth/tokenWhiteList");

// MIDDLEWARES
roleSchema.pre("save", async function (next) {
  if (this.isNow) {
    const firsUser = await this.constructor.findOne({});
    if (!firsUser) {
      this.role = "ADMIN";
    }
  }
  next();
});

credentialSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

// MODEL INIT
const TokenWhiteList = mongoose.model("TokenWhiteList", tokenWhiteListSchema);

const User = mongoose.model("User", userSchema);
const UserCredential = mongoose.model("UserCredential", credentialSchema);
const UserRole = mongoose.model("UserRole", roleSchema);
const UserAdress = mongoose.model("UserAdress", userAdressSchema);

const Product = mongoose.model("Product", productSchema);

const ProductBrand = mongoose.model("ProductBrand", productBrandSchema);
const ProductCategoryGroup = mongoose.model('ProductCategoryGroup', productCategoryGroupSchema)
const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

const SaleOrder = mongoose.model("SaleOrder", saleOrderModel);

mongoose.set("debug", true);
// CONNECTION
const conn = () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("No se pudo conectar a MongoDB", err));

module.exports = {
  TokenWhiteList,
  conn,
  User,
  UserCredential,
  UserAdress,
  UserRole,
  Product,
  ProductBrand,
  ProductCategoryGroup,
  ProductCategory,
  SaleOrder,
};
