const productModel = require("../model/productModel");
const cloudinary=require('cloudinary')

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, totalQuantity,brand, catagory,avatar } = req.body;

    if(!(name&&description&&price&&totalQuantity&&brand&&catagory&&avatar))
    {
        res.status(400).json({
            success:false,
            message:"all data are needed"
        })
    }

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
        folder: "ecommerce_products",
      });

    const product = await productModel.create({
      userId:req.user._id,
      name,
      description,
      price,
      totalQuantity,
      brand,
      catagory,
      avatar:{
        public_id:myCloud.public_id,
        url:myCloud.secure_url,
      }
    });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    // console.log("call")
    const products = await productModel.find({});
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productModel.findOne({ _id: productId });
    res.status(200).json({
      success: true,
      product,
    });
    console.log("get product call");
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
