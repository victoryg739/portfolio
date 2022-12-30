import React from "react";

function Social(props){
    let iconSize = props.classname === "frontSocial"?"fa-2x":"fa-3x";
    return(
        
        <ul className={`${props.classname} list-unstyled`}>
            <li >
                <a href="https://www.linkedin.com/in/victor-yoong/" className={`fa-brands fa-linkedin ${iconSize}`}></a>
            </li>
            <li>
                <a href="https://github.com/victoryg739" className={`fa-brands fa-square-github ${iconSize}`}></a>
            </li>
            <li>
                <a href="https://www.instagram.com/victoryg99/" className={`fa-brands fa-instagram ${iconSize}`}></a>
            </li>
        </ul>
        
    );
}
export default Social;