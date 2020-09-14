const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const apiRoutes = require("./routes");
const functions = require("firebase-functions");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPEvLG6var28apxGvcacQOO41tuzRRF1PLuNVOeVNeVvrKZkONIoiBhsm1ZTsPoQqYJflJXEk2b1wthXrBz70fK00anllVMqa"
);

const app = express();
const PORT = process.env.PORT || 3001;

// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.post("/payments/create", async (request, response) => {
  console.log(request)
  const total = request.query.total;
  console.log("payment req recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.use(apiRoutes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/store", {
  // useUnifiedTopology: true,
  // useNewUrlParser: true,
  // useCreateIndex: true,
});


app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

exports.api = functions.https.onRequest(app);
