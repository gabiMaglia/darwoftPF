const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleOrderModel = new Schema({
  status: {
    type: String,
    require: true,
  },
  total: {
    type: String,
    require: true,
  },
  products: {
    type: Array,
    require: true,
  },
  shippingAdress: {
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
  dateOfExpedition: {
    type: Date,
  },
  trackingCode: {
    type: String,
  },
});


module.exports = { saleOrderModel }