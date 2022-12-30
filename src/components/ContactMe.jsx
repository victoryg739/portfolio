import ContactMeCSS from "./ContactMe.module.css"

const contactStart = "<Contact Me>";
const contactEnd = "</Contact Me>";
function ContactMe(){
    return(
        <div className = "Section" >
            <hr className="style-eight"></hr>
            <h1 className ="titleStart">{contactStart}</h1>
            <p className = {ContactMeCSS.startText}>Feel free to drop me an email!</p>
            <form action="https://formsubmit.co/victoryoong570@gmail.com" method="POST" >
                <label>Name</label>
                <input type="text" id="name" name="name" required/>

                <input type="hidden" value="Portfolio Contact" name="subject"/>

                <label >Email</label>
                <input type="email" id="email" name="email" required/>

                <label>Message</label>
                <input type="text" id="message" name="mesage" required/>


                <button value="Submit">Submit form</button>

            </form>
            <h1 className ="titleEnd">{contactEnd}</h1>
        </div>
        
    );
}
export default ContactMe;