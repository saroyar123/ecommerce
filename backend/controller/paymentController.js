const Razorpay = require("razorpay");
const Payment = require("../model/paymentModel.js");
const crypto = require("crypto");

exports.makePayment = async (req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.razorpay_key,
    key_secret: process.env.razorpay_key_secret,
  });
  try {
    const { amount } = req.body;
    console.log(amount);

    const order = await razorpay.orders.create({
      amount: Number(amount * 100),
      currency: "INR",
    });

    console.log(order);

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
  console.log("call",req.body)
  res.redirect(
    `http://127.0.0.1:5173/order`
  )
  // console.log("call");
  // try {
  //   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  //     req.body;

  //   console.log(req.body);

  //   const body = razorpay_order_id + "|" + razorpay_payment_id;

  //   const expectedSignature = crypto
  //     .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
  //     .update(body.toString())
  //     .digest("hex");

  //   const isAuthentic = expectedSignature === razorpay_signature;

  //   console.log(isAuthentic);

  //   if (isAuthentic) {
  //     // Database comes here

  //     await Payment.create({
  //       razorpay_order_id,
  //       razorpay_payment_id,
  //       razorpay_signature,
  //     });

  //     res.redirect(
  //       `http://localhost:3000/order`
  //     ).json({
  //       success:true
  //     });
  //   }
  //   console.log(req.body)
  // } catch (error) {
  //   {
  //     res.status(400).json({
  //       success: false,
  //     });
  //   }
  // }

};

exports.getKey = (req, res) => {
  res.status(200).json({
    key: process.env.razorpay_key,
  });
};
