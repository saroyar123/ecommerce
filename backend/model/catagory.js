const { default: mongoose } = require("mongoose");

const catagoryModel=new mongoose.Schema({
    name:String
});

module.exports=mongoose.model("catagory",catagoryModel)