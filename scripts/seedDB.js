const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/store");

// Create seeds below
const productSeed = [
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p600x600/119128339_374697880598539_4976649681774087810_o.jpg?_nc_cat=106&_nc_sid=a26aad&_nc_ohc=e3lQVNVWlXMAX93KXLB&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=bb3816e039d2fc1b9db22664eb84310a&oe=5F894AAB",
    title: "Vibe",
    price: "10.99",
    quantity: 8,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/116883182_341492843919043_2805766943423253124_o.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_ohc=vU0Glj198fwAX_lU9HG&_nc_ht=scontent-sjc3-1.xx&oh=362d8bb2be8417ae7f8841ecce9365c2&oe=5F872D35",
    title: "Love",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/106715949_317666726301655_588515361485473964_o.jpg?_nc_cat=109&_nc_sid=9267fe&_nc_ohc=pvLlhQAap0QAX_39ljJ&_nc_ht=scontent-sjc3-1.xx&oh=7597e616c3c9854213c07d829ebdd2db&oe=5F87BABC",
    title: "Estrella",
    price: "10.99",
    quantity: 5,
    date: new Date(Date.now()),
  },
  {
    image:
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/108995070_325930472141947_534707308025832410_o.jpg?_nc_cat=111&_nc_sid=a26aad&_nc_ohc=htFeTziQ5dwAX9V0zfd&_nc_oc=AQlEwA-9JB_n1kWu29D7SgSPCLdwh1u7qMhU6bsBUtes5bjJ1L_OMTGQEs0RZJAr4Ss&_nc_ht=scontent-sjc3-1.xx&oh=213235fb3d2614b2535b6390dc8c18db&oe=5F89D374",
    title: "Lip Gloss",
    price: "5.99",
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
      "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/116269140_341353020599692_4542976211358077617_o.jpg?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=YhKS0SPqh8kAX_N26_d&_nc_ht=scontent-sjc3-1.xx&oh=1000f451b8bbf2e022635e6f73f53c7a&oe=5F87BBD7",
    title: "Aquarius",
    price: "10.99",
    quantity: 5,
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
