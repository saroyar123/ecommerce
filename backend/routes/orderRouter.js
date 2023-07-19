const {Router}=require("express");
const { createOrder } = require("../controller/orderController");
const { userAuth } = require("../config/auth");
const orderRouter=Router();

orderRouter.route("/order")
.post(userAuth,createOrder);


module.exports=orderRouter