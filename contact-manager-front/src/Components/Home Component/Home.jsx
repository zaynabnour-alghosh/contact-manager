import React from "react";
import './Home.css';
import Header from "../Header Component/Header";
import ContactContainer from "../ContactContainer Component/ContactContainer";
import Login from "../Login Component/Login";
import Signup from "../Signup Component/Signup";
import ContactForm from "../ContactForm Component/ContactForm";
const Home=({contact})=>{
    const loggedIn=true;
    return(
        <div className="home">
            <Header />
            
            
            {(!loggedIn)?<>            
            <Login />
            <Signup />
            </>:
            <>
            <div className="contentD">
            <div className="FormSpace">
            <ContactForm />
            </div>
            <div className="ContactSpace">
            <ContactContainer contact={contact} />
            </div>  
            </div>                      
            </>}                        
        </div>
        
    );
}
export default Home;