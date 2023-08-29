const orderModel = require("../model/orderModel");
const Payment = require("../model/paymentModel.js");

exports.createOrder = async (req, res) => {
  try {
    const { cartId,paymentId,orderId,signature} = req.body;
    console.log(cartId,paymentId,orderId,signature)


    await Payment.create({
      razorpay_order_id:orderId,
      razorpay_payment_id:paymentId,
      razorpay_signature:signature
    });
    console.log("create payment")


    const order = await orderModel.create({
      userId: req.user._id,
      cartId,
      paymentId:Payment._id
    });

    console.log("create order")

    req.user.ordered.push(order._id);
    req.user.cart=null;
    await req.user.save();

    res.status(201).json({
      success: true,
      // order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};


const getOrderDetails=async(req,res)=>{
  try {
    const order=await orderModel.findOne({_id:req.user.ordered._id}).populate('')
  } catch (error) {
    
  }
}
