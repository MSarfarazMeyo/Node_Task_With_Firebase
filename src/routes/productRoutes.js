const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
} = require("../controllers/productController");

router.post("/add_product", createProduct);
router.get("/get_all_products", getAllProduct);

module.exports = router;
