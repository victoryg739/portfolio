
import React from "react";
import logo from "../assets/logo.png";
import resumePDF from "../assets/Victor_Yoong_Resume.pdf";

function Header(){
    return(
        <nav className="navbar navbar-dark">
        <img src={logo} width="100" height="100" alt=""></img>
        <a className = "resumeBtn" href={resumePDF} target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume
            </a>
        </nav>   
    );
    }
export default Header;  