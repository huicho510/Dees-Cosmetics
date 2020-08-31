const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {type: String,required: true, },
  details: String,
  // url string for thumbnail image
  image: {type: String, default: "",},
  // url for recipe web page - unique index
  href: {type: String, default: "",unique: true,},
  price: {type: String},
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
