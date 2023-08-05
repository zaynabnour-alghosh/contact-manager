import React from "react";
import Header from "./components/Header Component";
import Home from "./components/Home Component";
import Main from "./components/Main Component";
// import { BrowserRouter,Routes,Route,createBrowserRouter } from "react-router-dom";
// import Login from "./components/Login Component";
// import Signup from "./components/Signup Component";
import "./App.css";
const App=()=>{
  
  const contact={
    "name": "John Doe",
    "phone": "+ (961) 3 522523",
    "address_longitude": "54",
    "address_lattitude": "85"
  }
  const loggedIn=true
   return (
    <div className="homex">
      <Header />
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home contact={contact}/>} />
       
        <Route path="/main" element={<Main contact={contact} />} />
        
      </Routes>
    </BrowserRouter> */}


   
      
    {(!loggedIn)?<>  
    <Home contact={contact}/>          
    {/* {/* <Login /> */}
    {/* <Signup />  */}
    </>:
    <> 
   <Main contact={contact}/> 
    {/* <div className="contentD">
    <div className="FormSpace">
    <ContactForm />
    </div>
    <div className="ContactSpace">
    <ContactContainer contact={contact} />
    </div>  
    </div>                       */}
    </>}                        
</div>
    
  );
}

export default App;
