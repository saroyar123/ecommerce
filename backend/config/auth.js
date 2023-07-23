const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

exports.userAuth = async (req, res, next) => {
  try {
    
    // console.log(req.headers.authorization.split(' ')[1])
    // console.log(req.headers.token)
    const token = req.headers.token || req.headers.authorization.split(" ")[1];
    const email = jwt.verify(token, "saroyarhossain");

    const user = await User.findOne({ email: email })
    .populate({
        path: "cart",
        populate: { path: "products._id",model:"product"} },
      )
      .populate("ordered").exec();

      // console.log(user)
    if (!user) {
      throw Error("login first");
    }
    req.user = user;
    console.log("auth call complete");
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
