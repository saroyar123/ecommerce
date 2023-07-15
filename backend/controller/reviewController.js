const reviewModel = require("../model/reviewModel");

exports.createReview=async(req,res)=>{
try {
    const {rating,comment,userId,productId}=req.body;

    const review=await reviewModel.create({
    rating,comment,userId,productId
    })

    res.status(201).json({
        success:true,
        review
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message:error
    })
}
}