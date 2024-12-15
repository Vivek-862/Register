import React from 'react'
import { Link } from 'react-router-dom'
import  {ToastContainer }from "react-toastify"
import {useState} from "react"

const signup = () => {
    const [signupInfo,setSignupInfo]=useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(name,value);
        const copySignupInfo={...signupInfo};
        copySignupInfo[name]=value;
        setSignupInfo(copySignupInfo);
    }

    console.log("loginInfo->",signupInfo)

    const handleSignup=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="container"> 
    <h1>Login</h1>
    <form onSubmit={handleSignup}>
        <div>
            <label>Name</label>
            <input 
            onChange={handleChange}
            type='text'
            autoFocus
            placeholder="Enter your name"
            value={signupInfo.name}
            />
        </div>
        <div>
            <label>Email</label>
            <input type='email'
            onChange={handleChange}
            autoFocus
            placeholder="Enter your email"
            value={signupInfo.email}
            />
        </div>
        <div>
            <label>Password</label>
            <input type='password'
            onChange={handleChange}
            autoFocus
            placeholder="Enter your password"
            value={signupInfo.password}
            />
        </div>

        <button type="submit">Signup</button>
        <span>Already have an account ? <Link to="/login">Login</Link></span>
    </form>
    <ToastContainer/>

    </div>
  )
}

export default signup