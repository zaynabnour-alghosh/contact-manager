import React from "react";
import "./ContactForm.css";
const ContactForm=()=>{
    return(
        <div className="form">          
        <div className="containerF">
                <div className="inputF">
                    <label>Full Name</label>
                    <input type="text" placeHolder="Full Name"/>
                </div> 
                <div className="inputF">                    
                <label>Phone Number</label>
                    <input type="text" placeHolder="Phone" />
                </div>
                <div className="inputF">
                    <label>Longitude</label>
                    <input type="text" placeHolder="Longitude" />
                </div>
                <div className="inputF">
                    <label>Latitude</label>
                    <input type="text" placeHolder="Latitude" />
                </div>
                <button className="addC">ADD</button>
            </div>  
        <button className="btnLogout">&lt;= Logout</button>        
      </div>
    );
}
export default ContactForm