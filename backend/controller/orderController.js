const orderModel = require("../model/orderModel");

exports.createOrder=async(req,res)=>{
    try {
        const {userId,orderedProducts}=req.body;
    
        const order=await orderModel.create({
            userId,orderedProducts
        })
    
        res.status(201).json({
            success:true,
            order
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error
        })
    }
    }