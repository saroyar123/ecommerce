const {Router}=require("express");
const { createUser, userLogin, getUser } = require("../controller/userController");
const { userAuth } = require("../config/auth");
const userRouter=Router();

userRouter.route("/user")
.post(createUser).get(userAuth,getUser);

userRouter.route("/loginUser")
.post(userLogin).get(userAuth);

module.exports=userRouter