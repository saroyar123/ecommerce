const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const userModel = require("../model/userModel");
const nodemailer = require("nodemailer");
const transport =require("../config/mailTranspoter")

// create user account in database
exports.createUser = async (req, res) => {
  try {
    // name, email, password, address, avatar
    const { name, email, password, address, avatar } = req.body;

    // console.log(avatar)

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "data not found",
      });
    }

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
      folder: "ecommerce_User",
    });

    console.log(myCloud)

    const validEmail = await User.findOne({ email: email });

    if (validEmail) {
      return res.status(400).json({
        success: false,
        message: "email already use",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    // console.log(address);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      address,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });

    const token = jwt.sign(email, process.env.jwt_secret);

    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// methods for login the user
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.findOne({ email: email });
    // .populate({
    //   path: "cart",
    //   populate: { path: "products._id", model: "product" },
    // })
    // .populate({
    //   path: "ordered",
    //   populate: {
    //     path: "cartId",
    //     populate: { path: "products._id", model: "product" },
    //   },
    // })
    // .exec();
    // console.log(user)
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
    // console.log(user);

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        success: false,
        message: "email does not match",
      });
    }

    const token = jwt.sign(email, process.env.jwt_secret);

    res.status(200).json({
      success: true,
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    // console.log(process.env.razorpay_key)
    // console.log(req.user._id)
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// mail verify

exports.sendMail = async (req,res) => {
  try {

    const info=await transport.sendMail({
      from:'yarsaro2001@gmail.com',
      to:'saroyarhossain804@gmail.com',
      subject:'check nodemailer',
      text:'plain text',
      html:"<h1>hello</h1>"
      })

      res.status(200).json({
        success:true,
        message:"mail send",
        info
      })

  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
    })
  }
  };
