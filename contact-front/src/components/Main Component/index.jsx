import React from "react";
import './Main.css';
import ContactForm from "../ContactForm Component";
import { useState,useEffect } from "react";
import axios from "axios";
import ContactContainer from "../ContactContainer Component";
import Header from "../Header Component";
const Main=()=>{
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async ()=>{
        const response = await axios.get("http://127.0.0.1:8000/api/contacts");
        setContacts(response.data)
    }
    useEffect(()=>{
        fetchContacts()
    }, [])
    return(
        <div>
           
           <div className="contentD">
               <div className="FormSpace">
                     <ContactForm setContacts={setContacts}/>
            </div>
            <div className="ContactSpace">
               <ContactContainer contacts={contacts} />
            </div>  
            </div>    
        </div>
           
       
                           
      
    );
}
export default Main;