import React from "react";
import "./ContactForm.css";
import { useState} from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
const ContactForm=({setContacts})=>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        phone: "",
        address_longitude:"",
        address_latitude:""
      })
    const handleDataChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit =  async ()=>{
        console.log(data)
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/add_contact", data);
            console.log(response);        
            const response2 = await axios.get("http://127.0.0.1:8000/api/contacts");
            setContacts(response2.data)
            setData({name: " ", phone: " ",address_longitude:" ",address_latitude:" "})
        }catch(e){console.log(e)}
    }
    const handleNavigate=()=>{navigate("/")}
    const handle=()=>{
        handleSubmit()
        handleNavigate() 
    }    
    return(
        <div className="form">
            <div className="containerF">
                <div className="inputF">
                    <label>Full Name</label>
                    <input
                        name="name" 
                        type="text" 
                        placeholder="Full Name"
                        value={data.name} 
                        onChange={handleDataChange}
                    />
                </div> 
                <div className="inputF">                    
                    <label>Phone Number</label>
                    <input
                        name="phone" 
                        type="text" 
                        placeholder="Phone"
                        value={data.phone} 
                        onChange={handleDataChange}
                    />
                </div>
                <div className="inputF">
                    <label>Longitude</label>
                    <input 
                        name="address_longitude" 
                        type="text" 
                        placeholder="Longitude" 
                        value={data.address_longitude} 
                        onChange={handleDataChange}
                    />
                </div>
                <div className="inputF">
                    <label>Latitude</label>
                    <input 
                        name="address_latitude"
                        type="text" 
                        placeholder="Latitude" 
                        value={data.address_latitude} 
                        onChange={handleDataChange}
                    />
                </div>
                <button className="addC"  onClick={handle}>ADD</button>
            </div>             
      </div>
    );
}
export default ContactForm