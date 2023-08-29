const mongoose=require("mongoose");

const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

const user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validateEmail,"please enter a valid email"]
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
      pin:String,
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