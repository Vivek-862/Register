import express from "express";
import {signupValidation,loginValidation} from "../middlewares/validation.js"
import {signup,login} from "../controllers/authController.js"


const Router=express.Router();

Router.post("/login",loginValidation,login)

Router.post("/signup",signupValidation,signup);

export default Router