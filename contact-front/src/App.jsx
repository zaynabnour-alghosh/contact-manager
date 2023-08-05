import React from "react";
import Header from "./components/Header Component";
import Home from "./components/Home Component";
const App=()=>{
  const contact={
    "name": "John Doe",
    "phone": "+ (961) 3 522523",
    "address_longitude": "54",
    "address_lattitude": "85"
    
}
   return (
   <div>      
      <Home contact={contact}/>
    </div>
  );
}

export default App;
