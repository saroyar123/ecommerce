const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors")
const { connect } = require("./config/dbConnect");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const reviewRouter = require("./routes/reviewRouter");
const orderRouter = require("./routes/orderRouter");
const app=express();
dotenv.config();
connect();
app.use(cors());
app.use(express.json());
app.use("/api/v1",userRouter,productRouter,reviewRouter,orderRouter);


app.get('/',(req,res)=>{
 res.status(200).json({
    success:"true"
 })
})

app.listen(process.env.PORT,()=>{
    console.log("server is running")
})