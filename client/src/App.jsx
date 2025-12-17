import React, { useState, useEffect } from "react";
import Contact from ".././src/pages/Contact"; 


export default function App(){
  
  const [ message, setMessage ] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
         .then(res => res.json())
         .then(data => setMessage(data.message))
         .catch(err => console.error(err))
  }, []);

  return (
    <React.Fragment>
    <h1>Asma portfolio</h1>
    <p>{message}</p>
    <Contact />
    </React.Fragment>
  )

}