const {Router}=require("express");
const { createUser, userLogin } = require("../controller/userController");
const userRouter=Router();

userRouter.route("/user")
.post(createUser);

userRouter.route("/loginUser")
.post(userLogin);

module.exports=userRouter