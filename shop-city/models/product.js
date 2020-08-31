const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {type: String,required: true, },
  
  rating: {type: String,required: false,},
  // url string for thumbnail image
  image: {type: String, default: "",},
  // url for recipe web page - unique index
  href: {type: String, default: "",unique: true,},

  price: {type: Integer,},
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
