const Razorpay = require("razorpay");
const Payment = require("../model/paymentModel.js");
const crypto = require("crypto");
const paymentModel = require("../model/paymentModel.js");
const orderModel = require("../model/orderModel.js");

exports.makePayment = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.razorpay_key,
    key_secret: process.env.razorpay_key_secret,
  });
  try {
    const { amount } = req.body;
    // console.log(amount);

    const order = await razorpay.orders.create({
      amount: Number(amount * 100),
      currency: "INR",
    });

    // console.log(order);

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.paymentVerification = async (req, res) => {
  try {
    const {  } =
      req.body;

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    const order = await orderModel.create({
      userId: req.user._id,
      cartId,
      paymentId: payment._id,
    });

    req.user.ordered.push(order._id);
    req.user.cart = null;
    await req.user.save();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    {
      res.status(400).json({
        success: false,
      });
    }
  }
};

exports.getKey = (req, res) => {
  res.status(200).json({
    key: process.env.razorpay_key,
  });
};
