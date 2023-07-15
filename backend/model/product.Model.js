const mongoose=require("mongoose");

const product=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:Number,
    totalQuantity:Number,
    catagory:String
})

module.exports=mongoose.model("product",product)

