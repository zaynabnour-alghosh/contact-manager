import React from "react";
import { useState } from "react";
import axios from "axios";
import './Login.css';
const Login=()=>{
    const [data,setData]=useState({
        email:"Email",
        password:"Password"
    })
    const handleDataChange=(e)=>{
        setData({...data,[e.target.name]: e.target.value});
    }
    const handleSubmit=async ()=>{
        try{
            const response=await axios.post("http://localhost:8000/api/guest/login",data)
            const user=response.data;
            console.log(user);
            setData({email:"",password:""});
            localStorage.setItem("token",user.token);
            const userId=user.user.id
            console.log(userId)
            if(user){
                console.log("loggedIn:true");
                localStorage.setItem("loggedIn","true")
            }
            const response2 = await axios.post("http://127.0.0.1:8000/api/contacts",userId);
            console.log(response2.data);
        }catch(e){console.log(e)}
    }     

    return(
        <div className="Login">
            <div className="TitleLog">LOG IN</div>
            <div className="container">
                <div className="inputs">
                    <label>Email</label>
                    <input name="email" type="text" placeholder="Email"   onChange={handleDataChange}/>
                </div> 
                <div className="inputs">                    
                <label>Password</label>
                    <input name="password" type="password" placeholder="Password" onChange={handleDataChange}/>
                </div>
                <button className="Log" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
}
export default Login;