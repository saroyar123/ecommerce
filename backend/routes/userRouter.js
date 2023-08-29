const {Router}=require("express");
const { createUser, userLogin, getUser, sendMail } = require("../controller/userController");
const { userAuth } = require("../config/auth");
const userRouter=Router();

userRouter.route("/user")
.post(createUser).get(userAuth,getUser);

userRouter.route("/loginUser")
.post(userLogin)

userRouter.route("/sendMail").get(sendMail);

module.exports=userRouter