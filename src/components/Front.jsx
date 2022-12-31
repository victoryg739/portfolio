import React from "react";
import Social from "./Social";
import Background from "./Background";
import FrontCSS from "./Front.module.css";
import stylesCSS from "./styles.css"
import { useState } from "react";


const Front =({frontRef}) =>{
    const [name, setName] = useState("");

    const onClick = (e) => {
      e.preventDefault();
      frontRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    return(
       <div className= {`${FrontCSS.FrontDiv} ${stylesCSS.Section}`}>
            <Social
                classname= "frontSocial"
            />
            <p>Hello world, my name is &nbsp;
                <h2 className={FrontCSS.noNewLine}>Victor Yoong</h2>
            </p>
            <p>Aspiring Computer Science Student</p>
            {/* <p className={FrontCSS.codeText}>while(<div className={FrontCSS.codeRed}>!</div>(<div className={FrontCSS.codeGreen}>succeed</div> = <div className={FrontCSS.codeYellow}>try()</div>));</p>  */}
            <div className="escIcons row justify-content-center">
                <div className = "col-4 col-sm-2 d-flex justify-content-center">
                    <i className="fa-solid fa-utensils ">
                        <span className="caption">Eat();</span>
                    </i>
                </div>
                <div className = "col-4 col-sm-2 d-flex justify-content-center">
                     <i className="fa-solid fa-moon">
                        <span className="caption">Sleep();</span>
                    </i>
                </div>
                <div className = "col-4 col-sm-2 d-flex justify-content-center">
                    <i className="fa-solid fa-code">
                        <span className="caption">Code();</span>
                     </i>
                </div>
            </div>
        
            <section id={FrontCSS.section05} className={FrontCSS.demo}>
       
                <a onClick={onClick}><span></span>Scroll</a>
            </section>
            <Background/>

        </div>
    );
}
export default Front;