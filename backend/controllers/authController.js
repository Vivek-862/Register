import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const existuser = await UserModel.findOne({email});
        if(existuser){
            return res.status(409)
            .json({message:"user already exist",success:false})
        }

        const hashPassword=await bcrypt.hash(password,10);

        const newUser = new UserModel({
            name,
            email,
            password: hashPassword, // Save the hashed password
        });
        
        await newUser.save();
        res.status(201)
        .json({message:"signup successfully",
            success:true
        })
    }catch(error){
        res.status(500)
        .json({message:"Internal server error",
            success:false
        })

    }

}


export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existuser = await UserModel.findOne({email});
        const errorMsg="email or password is incorrect";
        if(!existuser){
            return res.status(403)
            .json({message: errorMsg,success:false});
        }

        const isPassEqual= await bcrypt.compare(password,existuser.password);
        if(!isPassEqual){
            return res.status(403)
            .json({message: errorMsg,success:false});
        }

        const jwtToken=jwt.sign(
            {email:existuser.email,_id:existuser._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )

        
        res.status(200)
        .json({message:"Login successfully",
            success:true,
            jwtToken,
            email,
            name:existuser.name,
        })
    }catch(error){
        res.status(500)
        .json({message:"Internal server error",
            success:false
        })

    }

}

