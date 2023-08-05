import React from "react";
import './Main.css';
import ContactForm from "../ContactForm Component";
import ContactContainer from "../ContactContainer Component";
import Header from "../Header Component";
const Main=({contact})=>{
    return(
        <div>
           
           <div className="contentD">
               <div className="FormSpace">
                     <ContactForm />
            </div>
            <div className="ContactSpace">
               <ContactContainer contact={contact} />
            </div>  
            </div>    
        </div>
           
       
                           
      
    );
}
export default Main;