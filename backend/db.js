import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "please provide MONGODB_URI in the .env file"
    )
} 
const connectDB=async()=>{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DB connected successfully");
}

export default connectDB

