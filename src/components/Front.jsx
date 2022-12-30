import React from "react";
import background from "../assets/background.jpg";
import Social from "./Social";
import ShootingStars from "./ShootingStars";
import MatrixBackground from "./MatrixBackground";
import Background from "./Background";
import FrontCSS from "./Front.module.css";
import stylesCSS from "./styles.css"

function Front(){
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
                    <i class="fa-solid fa-utensils ">
                        <span class="caption">Eat();</span>
                    </i>
                </div>
                <div className = "col-4 col-sm-2 d-flex justify-content-center">
                     <i class="fa-solid fa-moon">
                        <span class="caption">Sleep();</span>
                    </i>
                </div>
                <div className = "col-4 col-sm-2 d-flex justify-content-center">
                    <i class="fa-solid fa-code">
                        <small class="caption">Code();</small>
                     </i>
                </div>
            </div>
        
            <section id={FrontCSS.section05} class={FrontCSS.demo}>
       
                <a href="#aboutDiv"><span></span>Scroll</a>
            </section>
            <Background/>

        </div>
    );
}
export default Front;