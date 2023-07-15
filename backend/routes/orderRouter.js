const {Router}=require("express");
const { createOrder } = require("../controller/orderController");
const orderRouter=Router();

orderRouter.route("/order")
.post(createOrder);


module.exports=orderRouter