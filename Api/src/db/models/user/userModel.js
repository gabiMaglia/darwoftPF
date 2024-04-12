const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
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
      unique: true,
    },
    photo: {
      type: String
    },
    birthday: {
      type: Date,
      required: true,
    },
    nacionality: String,

    dni: {
      type: Number,
      require: true,
      unique: true
    }, 
    
    isActive: {
      type: Boolean,
      require: true,
      default: false
    },



    credentials: {
      type: mongoose.Types.ObjectId,
      ref: "UserCredential",
      required: true,
    },

    role: { type: mongoose.Types.ObjectId, ref: "UserRole", required: true },

    adress: {
      type: mongoose.Types.ObjectId,
      ref: "UserAdress",
      required: true,
    },
  },
  { timestamps: true }
);

const roleSchema = new Schema({
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
});

const credentialSchema = new Schema(
  {
    password: { type: String, require: true },
  },
  { timestamps: true }
);

const userAdressSchema = new Schema({
  country: String,
  state: String,
  city: String,
  street: String,
  number: Number,
  zipCode: Number,
});

module.exports = { userSchema, credentialSchema, roleSchema, userAdressSchema };
