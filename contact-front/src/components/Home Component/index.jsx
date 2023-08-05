import React from "react";
import "./Home.css";
// import ContactContainer from "../ContactContainer Component";
import Header from "../Header Component";
import Login from "../Login Component";
import Signup from "../Signup Component";
// import ContactForm from "../ContactForm Component";
const Home=({contact})=>{
    // const loggedIn=true;
    return(
        <div className="homes">
            <Login />
            <Signup />
            {/* <Header />    
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
            </>}                         */}
        </div>
        
    );
}
export default Home;