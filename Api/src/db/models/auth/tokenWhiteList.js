const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenWhiteListSchema = new Schema({
  token: {
    type: String,
    require: true,
  },
});

module.exports = tokenWhiteListSchema;
