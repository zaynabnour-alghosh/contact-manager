import React, { useState } from "react";
import Header from "./components/Header Component";
import Main from "./components/Main Component";
import { BrowserRouter,Routes,Route,createBrowserRouter } from "react-router-dom";

import "./App.css";

const App=()=>{
  return (
    <div className="homex">      
      <Header />    
      <BrowserRouter> 
        <Routes>     
          <Route path="/" element={<Main/>}/>       
        </Routes>
      </BrowserRouter> 
   
    </div>    
  );
}
export default App;
