const { default: mongoose } = require("mongoose");

const cartModel=mongoose.Schema({
    totalItem:{
        type:Number,
        default:0
    },
    products:[
        {
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'product'
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
    status:{
        type:String,
        default:"To be order"
    }
})

module.exports=mongoose.model("cart",cartModel)