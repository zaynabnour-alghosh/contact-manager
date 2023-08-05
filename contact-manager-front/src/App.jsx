import React from "react";
import Header from "./Components/Header Component/Header";
import Home from "./Components/Home Component/Home";
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
