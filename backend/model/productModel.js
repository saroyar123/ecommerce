const mongoose=require("mongoose");

const product=mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    avatar:{
        public_id:String,
        url:String
    },
    brand:{
        type:String
    },
    price:Number,
    totalQuantity:Number
})

module.exports=mongoose.model("product",product)

