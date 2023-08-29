const productModel = require("../model/productModel");
const cloudinary = require("cloudinary");

exports.createProduct = async (req, res) => {
  console.log("call")
  try {
    const { name, description, price, totalQuantity, brand,avatar } =
      req.body;

    // &&avatartotalQuantity&&brand&&
    // ,avatar
    if (!(name && description && price&&avatar&&totalQuantity&&brand)) {
      res.status(400).json({
        success: false,
        message: "all data are needed",
      });
    }

    console.log("call2")

    const myCloud = await cloudinary.v2.uploader.upload(avatar, {
        folder: "ecommerce_products",
      });

    const product = await productModel.create({
      userId: req.user._id,
      name,
      description,
      price,
      totalQuantity,
      brand,
      avatar:{
        public_id:myCloud.public_id,
        url:myCloud.secure_url,
      }
    });
    console.log("call3")
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

// filter the products about user preference

exports.filterProduct = async (req, res) => {
  try {
    const {price,name,catagory} = req.query;
    // const products=await productModel.find(filter);
    // console.log(price)

    let products=productModel.find({})

    if(req.query.name)
    products=products.where('name').regex(new RegExp(req.query.name, 'i'));

    if(catagory)
    products=products.where("catagory").regex(new RegExp(req.query.catagory, 'i'))


    if(price!==undefined)
    products=products.where('price').lte(+price);

    products=await products.exec();

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      error
    });
  }
};
