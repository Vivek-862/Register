import express from "express";
import ensureAuthenticated from "../middlewares/auth.js";

const Router=express.Router();

Router.get("/", ensureAuthenticated ,(req,res)=>{
    console.log('---logged in usr detail---',req.user);
    
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"laptop",
            price:20000
        }
    ])
})

export default Router
