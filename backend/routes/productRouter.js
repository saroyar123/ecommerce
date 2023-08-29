const { Router } = require("express");
const {
  createProduct,
  getAllProducts,
  getProduct,
  filterProduct,
} = require("../controller/productController");
const { userAuth } = require("../config/auth");
const productRouter = Router();

productRouter
  .route("/product")
  .post(userAuth, createProduct)
  .get(getAllProducts);

productRouter
.route("/product/:id")
.get(getProduct);

productRouter.route("/productSearch")
.get(filterProduct)

module.exports = productRouter;
