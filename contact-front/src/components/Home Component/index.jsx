import React from "react";
import "./Home.css";
import Login from "../Login Component";
import Signup from "../Signup Component";

const Home=()=>{
    return(
        <div className="homes">
            <Login />
            <Signup />
        </div>        
    );
}
export default Home;