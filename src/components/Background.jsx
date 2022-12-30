import BackgroundCSS from "./Background.module.css";

function Background(){
    return(
    <div className={BackgroundCSS.area} >
                <ul class={BackgroundCSS.circles}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
        </div >

    );
}
export default Background;