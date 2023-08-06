import React from "react";
import ContactCard from "../Contact Card";
import "./ContactContainer.css";
const ContactContainer=({contacts})=>{
    // console.log(contacts);
    const contacts_array=[];
   for( const i in contacts.contact_data){
    // console.log(contacts.contact_data[i]);
    contacts_array.push(contacts.contact_data[i])
   }
   console.log(contacts_array)
        return (
        <div className="contentC">
       
        <div className="CardContent">
            <div className="listC">
                
                    { contacts_array.map((contact,index)=>
                    (<ContactCard  contact={contact} key={index} /> )
                    )}
         
            </div>
            
        </div>
        </div>
        
    )
}
export default ContactContainer;