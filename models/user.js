const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  
  email: {
    type: String,
    unique: true,
    index: true,
  },
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
    type: Number,
    required:true,
    unique:false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
