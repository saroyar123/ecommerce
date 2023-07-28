const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors")
const cloudinary=require('cloudinary')
const { connect } = require("./config/dbConnect");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const reviewRouter = require("./routes/reviewRouter");
const orderRouter = require("./routes/orderRouter");
const cartRouter = require("./routes/cartRouter");
const paymentRouter = require("./routes/paymentRouter");
const app=express();
dotenv.config();
cloudinary.config(
    {
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
}
)
connect();
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));
app.use("/api/v1",userRouter,productRouter,reviewRouter,orderRouter,cartRouter,paymentRouter);


app.get('/',(req,res)=>{
 res.status(200).json({
    success:"true"
 })
})

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})