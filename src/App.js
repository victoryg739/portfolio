import React from "react";
import Front from "./components/Front";
import Header from "./components/Header";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { useRef } from "react";

function App(){
  const frontRef = useRef(null);

  return(
    <div>
      <Header/>
      <Front frontRef={frontRef}/>
      <AboutMe ref={frontRef}/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
  );

}

export default App;