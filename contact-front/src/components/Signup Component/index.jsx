import React from "react";
import './Signup.css';
const Signup=()=>{
    return(
        <div className="Signup">
            <div className="TitleSign">SIGN UP</div>
            <div className="container">                
                <div className="inputs">
                    <label>Full Name</label>
                    <input type="text" placeholder="Name" />
                </div> 
                <div className="inputs">
                    <label>Email</label>
                    <input type="text" placeholder="Email" />
                </div> 
                <div className="inputs">                    
                <label>Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <button className="Sign">Sign Up</button>
            </div>
        </div>
    );
}
export default Signup;