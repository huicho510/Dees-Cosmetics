const router = require("express").Router();
const productRoutes = require("./product");
const userRoutes = require("./user");

// Product routes
router.use("/product", productRoutes);
router.use("/user", userRoutes);

module.exports = router;
