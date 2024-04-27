const { body } = require("express-validator");

const loginValidation = [
  body("email").trim().exists().isEmail(),
  body("password")
    .exists({ checkFalsy: true, checkNull: true })
    .isLength({ min: 5 }),
];

const registerValidation = [
  body("userData.firstName")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .isLength({ min: 2 })
    .toLowerCase(),
  body("userData.lastName")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .isLength({ min: 2 })
    .toLowerCase(),
  body("userData.email")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .isEmail(),
  body("userData.password")
    .exists({ checkFalsy: true, checkNull: true })
    .isLength({ min: 5 }),
];

const productValidation = [
  body("productData.name")
    .trim()
    .exists({ checkFalsy: true, checkNull: true })
    .isLength({ min: 2 })
    .toLowerCase(),
  body("productData.price")
    .exists({ checkFalsy: true, checkNull: true })
    .isNumeric()
    .toLowerCase(),
  body("productData.images")
    .exists({ checkFalsy: true, checkNull: true })
    .isArray(),
  body("productData.productDescription")
    .exists({ checkFalsy: true, checkNull: true })
    .isArray(),
  body("productData.stock")
    .exists({ checkFalsy: true, checkNull: true })
    .isArray(),
];

const brandValidatino = [
  body("brandData.brandName")
  .exists({ checkFalsy: true, checkNull: true })
  .trim()
    .isLength({ min: 5 }),
];

const categoryValidation = [
  body("categoryData.catName")
    .exists({ checkFalsy: true, checkNull: true })
    .trim()
    .isLength({ min: 3 }),
  body("categoryData.image").exists({ checkFalsy: true, checkNull: true }),
];

const saleOrderValidation = [
  body("orderData.status")
    .exists({ checkFalsy: true, checkNull: true })
    .trim()
    .isLength({ min: 2 })
    .toLowerCase(),

  body("orderData.products")
    .exists({ checkFalsy: true, checkNull: true })
    .isArray(),

  body("orderData.total")
    .exists({ checkFalsy: true, checkNull: true })
    .isDecimal({ force_decimal: true }),

  body("orderData.paymentMethod")
    .exists({ checkFalsy: true, checkNull: true })
    .trim()
    .isLength({ min: 2 })
    .toUpperCase(),

  ,
  body("orderData.purchaseDate")
    .exists({ checkFalsy: true, checkNull: true })
    .isDate({ format: String }),

  body("orderData.shippingAdress")
    .exists({
      checkFalsy: true,
      checkNull: true,
    })
    .trim()
    .isLength({ min: 6 })
    .toLowerCase(),
  ,
];

module.exports = {
  loginValidation,
  registerValidation,
  brandValidatino,
  categoryValidation,
};
