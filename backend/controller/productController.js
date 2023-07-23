const productModel = require("../model/productModel");

exports.createProduct=async(req,res)=>{
try {
    const {name,description,price,totalQuantity,catagory}=req.body;

    const product=await productModel.create({
        name,description
    })

    res.status(201).json({
        success:true,
        product
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message:error
    })
}
}

exports.getAllProducts=async(req,res)=>{
    try {
        // console.log("call")
        const products=await productModel.find({});
        res.status(200).json({
            success:true,
            products
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error
        })
    }
}


exports.getProduct=async(req,res)=>{
    try {

        const productId=req.params.id
        const product=await productModel.findOne({_id:productId});
        res.status(200).json({
            success:true,
            product
        })
        console.log("get product call")
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error
        })
    }
}


