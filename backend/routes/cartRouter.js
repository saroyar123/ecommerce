const {Router}=require("express");
const { createCart,addProductInCart, deleteProductFromCart, cartsDetails } = require("../controller/cartController");
const { userAuth } = require("../config/auth");
const cartRouter=Router();

cartRouter.route("/cart")
.post(userAuth,createCart).get(userAuth,cartsDetails);

cartRouter.route("/cart/add/:id").get(userAuth,addProductInCart);
cartRouter.route("/cart/delete/:id").delete(userAuth,deleteProductFromCart)


module.exports=cartRouter