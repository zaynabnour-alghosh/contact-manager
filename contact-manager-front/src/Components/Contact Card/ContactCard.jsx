import React from "react";
import './ContactCard.css'
const ContactCard=({contact})=>{
    return (
      <div className="contact">
        <div>
          <p>{contact.name}</p>
          <div className="info">
          <h3>{contact.phone}</h3>
          <div className="btn">  
            <button className="btnn">Edit</button>
            <button className="btnn">Delete</button>
         </div> 
        </div>       
        </div>             
      </div>
    )
}
export default ContactCard;