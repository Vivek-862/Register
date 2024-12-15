import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
const app=express()
import connectDB from "./db.js";
import authRouter from "./routes/authRouter.js"
import productRouter from "./routes/productRouter.js"


dotenv.config()
app.use(bodyParser.json())
app.use(cors())

app.use("/auth",authRouter)
app.use("/products",productRouter)

const PORT =process.env.PORT || 8080;


app.get('/',(req,res)=>{
    res.send("hello")
})


connectDB()
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})