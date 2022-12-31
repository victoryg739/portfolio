import AboutMeCSS from "./AboutMe.module.css";
import meImgLink from "../assets/me.png";
import {forwardRef} from "react";
const aboutMeStart = "<About Me>";
const aboutMeEnd = "</About Me>";

const AboutMe = forwardRef((props,ref) => {
    return(
        <div className="Section" id="aboutDiv" ref={ref}>
            
            <h1 className ="titleStart">{aboutMeStart}</h1>

            
            <div className ={`row ${AboutMeCSS.aboutMeDiv}`}>
                <div className={`col-md-4 col-sm-6 col-10 mx-auto  ${AboutMeCSS.divImage}`}>
                    <img className = {AboutMeCSS.myImg} src={meImgLink} alt="myImage"></img>
                </div>
                <div className="col-md-8">
                <p>
                Hi, my name is Victor Yoong and I am a computer science student from the Nanyang Technological University.  I have always been fascinated by the power of technology and how it can be used to solve problems and improve people's lives.
                </p>
                <p>
                During my studies, I gained a strong foundation in programming languages such as <b>Java</b>, <b>Python</b>, <b>C++</b> and <b>C</b>, as well as experience in software development, machine learning, and data science.
                </p>
                <p>
                I am particularly interested in the finance industry and am always looking for ways to stay up-to-date on the latest industry trends and advancements. In my free time, I enjoy participating in hackathons and coding challenges to keep my skills sharp.
                </p>
                <p>
                The following are some technologies I've worked with:
                </p>
                <div className="row">
                    <div className="col-6 col-sm-4">
                    <i className="fa-solid fa-check"></i>
                        React
                    </div>
                    <div className="col-6 col-sm-4">
                    <i className="fa-solid fa-check"></i>
                        Node.js
                    </div>
                    <div className="col-6 col-sm-4">
                    <i className="fa-solid fa-check"></i>
                        Next.js
                    </div>

                    <div className="col-6 col-sm-4">
                    <i className="fa-solid fa-check"></i>
                        MongoDB
                    </div>
                    <div className="col-6 col-sm-4">
                    <i className="fa-solid fa-check"></i>
                        MySQL
                    </div>
                    <div className="col-6 col-sm-4">
                    <i className="fa-solid fa-check"></i>
                        Flask
                    </div>
                </div>

                </div>
            
            </div>

                <h1 className ="titleEnd">{aboutMeEnd}</h1>

        </div>

    );
});
export default AboutMe;