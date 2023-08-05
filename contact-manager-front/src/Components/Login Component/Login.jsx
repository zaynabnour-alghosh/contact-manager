import React from "react";
import './Login.css';
const Login=()=>{
    return(
        <div className="Login">
            <div className="TitleLog">LOG IN</div>
            <div className="container">
                <div className="inputs">
                    <label>Email</label>
                    <input type="text" placeHolder="Email" />
                </div> 
                <div className="inputs">                    
                <label>Password</label>
                    <input type="password" placeHolder="Password" />
                </div>
                <button className="Log">Login</button>
            </div>
        </div>
    );
}
export default Login;