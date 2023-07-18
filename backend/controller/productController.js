const productModel = require("../model/product.Model");

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



