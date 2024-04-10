const mongoose = require("mongoose");
const {
  userSchema,
  credentialSchema,
  roleSchema,
  userAdressSchema,
} = require("./models/user/userModel");

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

// RElATIONS
const User = mongoose.model("User", userSchema);
const UserCredential = mongoose.model("UserCredential", credentialSchema);
const UserAdress = mongoose.model("UserAdress", userAdressSchema);
const UserRole = mongoose.model("UserRole", roleSchema);

// CONNECTION
mongoose.Promise = global.Promise;
const conn = () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.error("No se pudo conectar a MongoDB", err));

module.exports = { conn, User, UserCredential, UserAdress, UserRole };
