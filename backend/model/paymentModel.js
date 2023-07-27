const { default: mongoose } = require("mongoose");

const paymentmodel=mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true,
      },
      razorpay_payment_id: {
        type: String,
        required: true,
      },
      razorpay_signature: {
        type: String,
        required: true,
      },
})

module.exports=mongoose.model('payment',paymentmodel)