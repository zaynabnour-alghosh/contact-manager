import React from "react";
import "./ContactContainer.css";
import ContactCard from "../Contact Card";

const ContactContainer=({contacts},{setContacts})=>{
    const contacts_array=[];
    for( const i in contacts.contact_data){
        console.log(contacts.contact_data[i]);
        contacts_array.push(contacts.contact_data[i])
    }
    console.log(contacts_array);
    return (
        <div className="contentC">
            <div className="CardContent">
                <div className="listC">
                    { contacts_array.map((contact,index)=>
                    (<span  key={index} >
                        <ContactCard setContacts={setContacts} contact={contact}/> 
                    </span>))}
                </div>
            </div>
        </div>        
    )
}
export default ContactContainer;