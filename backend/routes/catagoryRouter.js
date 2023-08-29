const {Router}=require("express");
const { createCatagory } = require("../controller/catagoryController");
const { userAuth } = require("../config/auth");
const catagoryRouter=Router();

catagoryRouter.route("/catagory").post(userAuth,createCatagory);

module.exports=catagoryRouter