const { model } = require("mongoose");
const cartModel = require("../model/cart");
const productModel = require("../model/productModel");

exports.createCart = async (req, res) => {
  try {
    const cart = await cartModel.create({});
    req.user.cart = cart._id;
    await req.user.save();
    res.status(201).json({
      success: true,
      cart,
    });
    console.log("working 3");
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addProductInCart = async (req, res) => {
  try {
    // id of adding product
    const productId = req.params.id;
    // console.log(req.user.cart);

    // find the cart from the cart collection
    const cart = await cartModel.findOne({ _id: req.user.cart._id });
    const product=await productModel.findOne({_id:productId});

    // find the product present in cart
    const cartProtuct = cart.products.find(
      (product) => product._id == productId
    );

    // console.log(cartProtuct)
    if (cartProtuct) {
      cartProtuct.quantity += 1;
    } else {
      cart.products.push(productId);

    }
    cart.totalItem+=1;
    cart.totalPrice+=product.price;

    

    await cart.save();

    const Cart = await cartModel
      .find({})
      .populate({ path: "products._id", model: "product" })
      .exec();
    res.status(200).json({
      success: true,
      Cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProductFromCart = async (req, res) => {
  try {
    // console.log("call1")
    // id of adding product
    const productId = req.params.id;

    // find the cart from the cart collection
    const cart = await cartModel.findOne({ _id: req.user.cart._id });
    const product=await productModel.findOne({_id:productId});

    // find the index of the product from cart's products array
    const productIndex = cart.products.findIndex(
      (product) => product._id == productId
    );


    // console.log(typeof(productIndex))
    // console.log(productIndex)
    if (productIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    // console.log(cart.products[productIndex].quantity)

    if(cart.products[productIndex].quantity>1)
    {
      cart.products[productIndex].quantity-=1;
    }
    else{
      cart.products.splice(productIndex, 1);
    }

    cart.totalItem-=1;
    cart.totalPrice-=product.price;
    
    await cart.save();
    // console.log("call2")
    const Cart = await cartModel
      .find({})
      .populate({ path: "products._id", model: "product" })
      .exec();
    res.status(200).json({
      success: true,
      Cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


exports.cartsDetails = async (req, res) => {
  try {
    const cart = await cartModel
      .findOne({ _id: req.user.cart._id })
      .populate({ path: "products._id", model: "product" })
      .exec();
    console.log(cart);
    res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
