const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/store"
);

// Create seeds below
const productSeed = [
{
  image: "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
  title: "Bonita",
  price: "12.99",
  date: new Date(Date.now()),
},
{
  image: "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
  title: "Glam",
  price: "12.99",
  date: new Date(Date.now()),


}
];

db.Product
  .deleteMany({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
