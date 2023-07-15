const {Router}=require("express");
const { createProduct } = require("../controller/productController");
const productRouter=Router();

productRouter.route("/product")
.post(createProduct);


module.exports=productRouter