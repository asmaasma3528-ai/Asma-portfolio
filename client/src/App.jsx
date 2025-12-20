import React, { useState, useEffect } from "react";
import Contact from ".././src/pages/Contact"; 
import Navbar from "../src/components/Navbar.jsx";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Projects from "../src/pages/Projects.jsx";
import Skills from "../src/pages/skills.jsx";

import "../src/styles/app.css";
import Footer from "../src/components/Footer.jsx";

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
    <Navbar />
    <p>{message}</p>
    <section id="home">
    <Home />
    </section>

    <section id="about">
    <About />
    </section>

    <section id = "skills">
      <Skills />
    </section>

    <section id = "projects">
    <Projects />
    </section>

    <section id = "contact">
    <Contact />
    </section>

    <section>
      <Footer />
    </section>
    </React.Fragment>
  )

}