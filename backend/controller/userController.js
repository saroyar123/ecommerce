const User= require("../model/userModel");
const emailValidator = require('deep-email-validator')

exports.createUser=async(req,res)=>{
   const {name,email,passward}=req.body;


   if(!name||!email||!passward)
   {
    return res.status(400).json({
        success:false,
        message:"data not found"
    })
   }

   const validEmail=await User.find({email:email})
   if(validEmail)
   {
    return res.status(400).json({
        success:false,
        message:"email already use"
    })
   }

   const user=await User.create({
    name,email,passward
   })

   res.status(201).json({
    success:true,
    user
   })
}

exports.userLogin=async(req,res)=>{
  const {email,passward}=req.body;
  const user=await User.find({email:email})
  if(!user)
  {
   return  res.status(400).json({
        success:false,
        message:"user not found"
    })
  }

  if(user.passward===passward)
  {
   return  res.status(400).json({
        success:false,
        message:"email does not match"
    })
  }

  res.status(200).json({
    success:true,
    user
  })
}