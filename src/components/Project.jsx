
import image from "../assets/wallStreetbets.jpg";
import ProjectEntity from "./ProjectEntity";
import projects from "../assets/projects";
const projectStart = "<Projects>";
const projectEnd = "</Projects>";

function createProject(project){
    return(
        <ProjectEntity
            key = {project.id}
            imageLink = {project.imageLink}
            altName = {project.altName}
            title = {project.title}
            description = {project.description}
            link= {project.link}
        />
    );
}

function Project(){
    return(
        <div className = "Section">
            <hr className="style-eight"></hr>
            <h1 className ="titleStart" id="projectsHeader">{projectStart}</h1>
            {projects.map(createProject)}
       
            <h1 className ="titleEnd">{projectEnd}</h1>
        </div>
    );
}
export default Project;