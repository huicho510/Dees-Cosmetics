const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    dropDups: true,
  },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: { type: Boolean, required: true, default: false },
  address: {
    type: String,
    required:true,
    unique:false,
  },
  city: {
    type: String,
    required:true,
    unique:false,
  },
  zip: {
    type: String,
    required:true,
    unique:false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
