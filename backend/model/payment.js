const { default: mongoose } = require("mongoose");

const paymentmodel=mongoose.Schema({
    paymethod:{
        type:String,
        required:true,
    },
    payStatus:{
        type:String,
        default:"pending"
    }
})