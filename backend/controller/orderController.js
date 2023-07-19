const orderModel = require("../model/orderModel");

exports.createOrder = async (req, res) => {
  try {
    const { cartId } = req.body;

    const order = await orderModel.create({
      userId: req.user._id,
      cartId,
    });

    req.user.ordered.push(order._id);
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
