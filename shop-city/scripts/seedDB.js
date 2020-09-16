const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/store");

// Create seeds below
const productSeed = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
    title: "Bonita",
    price: "10.99",
    quantity: 8,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
    title: "Classy",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2634/9716/products/extra-NEW-copy_720x.jpg?v=1584447731",
    title: "Fuego",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://contestimg.wish.com/api/webimage/5b9396ce6ee7bf328db43564-large.jpg?cache_buster=70433c0838f8570e17f76c828aaefdf8",
    title: "Marble brushes",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p843x403/116803901_341419097259751_1224335819277096490_o.jpg?_nc_cat=111&_nc_sid=9267fe&_nc_ohc=K6FXx2p_lroAX-Kzko5&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=ef8137144e5a3e303ae21c47758c6900&oe=5F8103A3",
    title: "Lust",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p960x960/118003996_357003345701326_5886519521610852162_o.jpg?_nc_cat=109&_nc_sid=a26aad&_nc_ohc=9q-d8WGCQjYAX9q3QXA&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=f96bf3749be5636f51469d30db7dd17f&oe=5F7ECFE7",
    title: "Flirt",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p843x403/118269246_356214415780219_4451834398350581975_o.jpg?_nc_cat=105&_nc_sid=9267fe&_nc_ohc=KHRhg1iz_EEAX_Kh4RJ&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=de6452185318da29638d24414244b24e&oe=5F819CF5",
    title: "Tempted",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p843x403/117564022_346672246734436_7119275120040645551_o.jpg?_nc_cat=107&_nc_sid=9267fe&_nc_ohc=FQCWbh57IogAX-KvcaI&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=6ead71afdaeec29a17a43276c7a674b7&oe=5F7F57AA",
    title: "Lash Glue",
    price: "5.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p843x403/117230874_346376650097329_3257080310744035871_o.jpg?_nc_cat=105&_nc_sid=9267fe&_nc_ohc=DdJGxw2V4EoAX-zjEQ9&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=94565216c8c8dda9ac7fe60310e5c122&oe=5F7EE2FA",
    title: "Fierce",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/p843x403/117230874_346376650097329_3257080310744035871_o.jpg?_nc_cat=105&_nc_sid=9267fe&_nc_ohc=DdJGxw2V4EoAX-zjEQ9&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=94565216c8c8dda9ac7fe60310e5c122&oe=5F7EE2FA",
    title: "test",
    price: "10.99",
    quantity: 5,
    id:"222",
    date: new Date(Date.now()),
  },
];

db.Product.deleteMany({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
