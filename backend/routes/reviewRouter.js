const {Router}=require("express");
const { createReview } = require("../controller/reviewController");
const reviewRouter=Router();

reviewRouter.route("/review").post(createReview)

module.exports=reviewRouter