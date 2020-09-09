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
  price: "11.99",
  quantity: 8,
  date: new Date(Date.now()),
},
{
  image: "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
  title: "Classy",
  price: "11.99",
  quantity:5,
  date: new Date(Date.now()),


},
{
  image: "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
  title: "Glam",
  price: "12.99",
  quantity:5,
  date: new Date(Date.now()),


},
{
  image: "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
  title: "Baddy",
  price: "11.99",
  quantity:5,
  date: new Date(Date.now()),


},
{
  image: "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
  title: "Fuego",
  price: "11.99",
  quantity:5,
  date: new Date(Date.now()),


},
{
  image: "https://contestimg.wish.com/api/webimage/5b9396ce6ee7bf328db43564-large.jpg?cache_buster=70433c0838f8570e17f76c828aaefdf8",
  title: "Diva",
  price: "11.99",
  quantity:5,
  date: new Date(Date.now()),


},
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
