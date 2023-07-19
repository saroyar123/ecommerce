const {Router}=require("express");
const { createProduct, getAllProducts, getProduct } = require("../controller/productController");
const productRouter=Router();

productRouter.route("/product")
.post(createProduct).get(getAllProducts);

productRouter.route("/Product/:id").get(getProduct);


module.exports=productRouter