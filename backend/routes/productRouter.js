const {Router}=require("express");
const { createProduct, getAllProducts, getProduct } = require("../controller/productController");
const { userAuth } = require("../config/auth");
const productRouter=Router();

productRouter.route("/product")
.post(userAuth,createProduct).get(getAllProducts);

productRouter.route("/Product/:id").get(getProduct);


module.exports=productRouter