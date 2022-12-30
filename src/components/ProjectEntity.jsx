import React from 'react';
import ProjectEntityCSS from "./ProjectEntity.module.css"
const ProjectEntity = props =>{
    return (       
            <div class={`row ${ProjectEntityCSS.projectCard}`}>
                <div className = {`col-sm-10 mx-auto col-md-5 col-lg-5 col-xl-5  ${ProjectEntityCSS.projectImgDiv}`}>
                    <a href={props.link}>
                    <img className="projectImg" src={props.imageLink} width="90%"  alt={props.altName}></img>
                    </a>
                </div>
                <div className ="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <h3>{props.title}</h3>
                    
                    <p>{props.description}</p>
                    <div id="outer">
                        <a href={props.link}>
                        <div class={`${ProjectEntityCSS.button_slide} ${ProjectEntityCSS.slide_right}`}>Learn More </div>
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default ProjectEntity;