const { default: mongoose } = require("mongoose");

const order = mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  cartId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "cart",
  },
  paymentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref:"payment"
  },
  totalOrderedProduct: Number,
  status:{
  type: String,
  default:"Pending"
  },
  address:{
    city:{
      type:String
    },
    pin:Number,
    landmark:{
      type:[mongoose.Schema.Types.Mixed]
    }
  },
  orderedDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("order", order);
