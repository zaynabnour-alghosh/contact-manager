import React from "react";
import './ContactCard.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ContactCard=({contact,setContacts})=>{
  const navigate = useNavigate();
 
  const id=contact.id;
 
  const handle_Delete=async()=>{
    try{
        const response=axios.get(`http://127.0.0.1:8000/api/delete/${id}`);
        console.log((await response).data);
        window.location.reload(false)
          // setContacts((contacts)=>[...contacts, response.data]);
        
    }catch(e){
        console.log(e)
    }
   }
   
    return (
      <div className="contact">
        <div>
          <p>{contact.name}</p>
          <div className="info">
          <h3>{contact.phone}</h3>
          <div className="btn">            
          <button  onClick={handle_Delete} className="btnn" >Delete</button><span onClick={()=>navigate('/')}></span>
         </div> 
        </div>       
        </div>             
      </div>
    )
}
export default ContactCard;