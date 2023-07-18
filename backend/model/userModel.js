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
        type:mongoose.SchemaTypes.ObjectId,
        ref:"review"
    }],
    address:{
      city:{
        type:String
      },
      pin:Number,
      landmark:{
        type:[mongoose.Schema.Types.Mixed]
      }
    },
    cart:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"cart",
        default:null
    },
    ordered:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"order"
    }]
})

module.exports=mongoose.model("User",user)