const orderModel = require("../model/orderModel");

exports.createOrder = async (req, res) => {
  try {
    const { cartId,paymentId } = req.body;
    console.log(cartId,paymentId)

    const order = await orderModel.create({
      userId: req.user._id,
      cartId,
      paymentId
    });

    req.user.ordered.push(order._id);
    req.user.cart=null;
    await req.user.save();

    res.status(201).json({
      success: true,
      order,
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
