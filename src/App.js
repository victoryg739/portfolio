import React from "react";
import Front from "./components/Front";
import ShootingStars from "./components/ShootingStars";
import Header from "./components/Header";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
function App(){
  return(
    <div>
      <Header/>
      <Front/>
      <AboutMe/>
      <Project/>
      <ContactMe/>
      <Footer/>
    </div>
  );

}

export default App;