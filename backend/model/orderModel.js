const { default: mongoose } = require("mongoose");

const order = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cart",
  },
  paymentId: {
    type: String,
    required: true,
  },
  totalOrderedProduct: Number,
  status: {
    type: String,
    default: "Shipping",
  },
  address: {
    city: {
      type: String,
    },
    pin: Number,
    landmark: {
      type: [mongoose.Schema.Types.Mixed],
    },
  },
  orderedDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("order", order);
