import Social from "./Social";
function Footer(){
    return(
        <div className="Section">
            <hr className="style-eight"></hr>

            <footer className="page-footer font-small">
            <Social
                classname = "footerSocial"
            />
            <div className="footer-copyright text-center py-3 ">© 2022 Victor Yoong
            </div>
            </footer>
        </div>
    )
}
export default Footer;