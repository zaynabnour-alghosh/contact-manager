import React from "react";
import ContactCard from "../Contact Card";
import "./ContactContainer.css";
const ContactContainer=({contact})=>{
    return (
        <div className="contentC">
        {/* <div className="contentForm">
            <ContactForm />
        </div> */}
        <div className="CardContent">
            <div className="listC">
            <ContactCard contact={contact} />
            <ContactCard contact={contact} />
            <ContactCard contact={contact} />
            <ContactCard contact={contact} />
            <ContactCard contact={contact} />
            <ContactCard contact={contact} />
            </div>
            
        </div>
        </div>
        
    )
}
export default ContactContainer;