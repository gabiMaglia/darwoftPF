const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleOrderModel = new Schema({
  status: {
    type: String,
    require: true,
  },
  products: {
    type: Array,
    require: true,
  },
  total: {
    type: String,
    require: true,
  },
  paymentMethod: {
    type: String,
    require: true,
  },
  purchaseDate: {
    type: Date,
    require: true,
  },
  shippingAdress: {
    type: String,
    require: true,
  },
  shippingDate: {
    type: Date,
  },
  trackingCode: {
    type: String,
  },
});


module.exports = { saleOrderModel }