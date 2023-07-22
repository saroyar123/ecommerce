const { default: mongoose, mongo } = require("mongoose");

const review=mongoose.Schema({
    rating:Number,
    comment:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }
})

module.exports=mongoose.model("review",review)