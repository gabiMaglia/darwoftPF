const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenWhiteListSchema = new Schema({
  token: {
    type: String,
    require: true,
    createdAt: { type: Date, expires: '2h' },
    validate: {
      validator: (v) => {
        return /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.([A-Za-z0-9-_.+/=]*)$/.test(v);
      },
      message: props => `${props.value} is not a valid JWT token!`
    }
  },
});

module.exports = tokenWhiteListSchema;
