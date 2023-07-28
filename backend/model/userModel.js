const mongoose=require("mongoose");

const user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    reviewed:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review"
    }],
    address:{
      city:{
        type:String
      },
      pin:Number,
      landmark:String
    },
    avatar:{
        public_id:String,
        url:String
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        default:null
    },
    ordered:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    },]
})

module.exports=mongoose.model("User",user)