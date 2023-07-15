const { default: mongoose } = require("mongoose");

const order=mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"
    },
    orderedProducts:[{
        productId:{
          type:mongoose.SchemaTypes.ObjectId,
          ref:"product"
        },
        productQuantity:Number,
        productPrice:Number
    }],
    totalOrderedProduct:Number,
    status:String,
    orderedDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("order",order)