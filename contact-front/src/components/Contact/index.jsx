import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contact= () => {
  const {id} = useParams()
  console.log(id)
  const handle_Delete=async()=>{
    try{
        const response=axios.get(`http://127.0.0.1:8000/api/contact_id/${id}`);
        console.log((await response).data.contact);
    }catch(e){console.log(e)}
    }
 
  return (
    <div>
        <button onClick={handle_Delete}>Show</button>
    </div>
  );
}
export default Contact;