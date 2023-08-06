import React from "react";
import './Main.css';
import ContactForm from "../ContactForm Component";
import ContactContainer from "../ContactContainer Component";
import { useState,useEffect } from "react";
import axios from "axios";

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const Main=()=>{
    const [contacts, setContacts] = useState([]);
    let contacts_address=[]
    const [responseData, setResponseData] = useState(null);
    const fetchContacts = async ()=>{
        const response = await axios.get("http://127.0.0.1:8000/api/contacts");
        
        setContacts(response.data);
        setResponseData(response.data);
        console.log(response.data.contact_data)
        
    }
    useEffect(() => {
        if (responseData) {
          const info = responseData.contact_data;
          console.log(info);
          for (let i = 0; i < info.length; i++) {
            const { name, address_longitude, address_latitude } = info[i];
            contacts_address.push({ name, longitude: address_longitude, latitude: address_latitude });
          }
          console.log(contacts_address);
        }
      }, [responseData]);
      
    
    useEffect(()=>{fetchContacts()}, [])
    return(
        <div>
            <div className="contentD">
                <div className="FormSpace">
                    <ContactForm  setContacts={setContacts}/>
                </div>
                <div className="ContactSpace">
                    <ContactContainer contacts={contacts} setContacts={setContacts}/>
                </div> 
            </div> 
            <div id="map">
        
            <MapContainer center={[40.7128, -74.006]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {contacts_address.map((contact, index) => (
                    <Marker position={[parseFloat(contact.latitude),parseFloat( contact.longitude)]} key={index} >
                    <Popup>
               contact.name
                </Popup>
                    </Marker>
                ))}




            <Marker position={[40.7128, -74.006]}>
                <Popup>
       Center <br /> 
                </Popup>
            </Marker>
            </MapContainer>

            </div>
               
        </div>     
     );
}
export default Main;