const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  nacionality: String,
});

const credentialSchema = new Schema({
  userId: { type: ObjectId, ref: "User", required: true },
  password: { type: String, require: true },
});

const roleSchema = new Schema({
  userId: { type: ObjectId, ref: "User", required: true },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
});

const userAdressSchema = new Schema({
  userId: { type: ObjectId, ref: "User", required: true },
  country: String,
  state: String,
  city: String,
  street: String,
  number: Number,
  zipCode: Number,
});

module.exports = { userSchema, credentialSchema, roleSchema, userAdressSchema };
