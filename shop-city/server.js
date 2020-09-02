const express = require("express");
// Requiring passport as we've configured it
const mongoose = require("mongoose");
const path = require("path");
const apiRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
