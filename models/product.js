const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {type: String,required: true, unique: true },
  details: {String},
  image: {type: String, default: "",},
  href: {type: String, default: "",},
  price: {type: Number},
  quantity:{type: Number},
  id:{type: String, required:false},
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
