import {FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-light" style={{minWidth:'100vw'}}>
            <div className="container-fluid ">
                <div className="row pe-4 ps-4">
                    <div className="col-12 d-flex align-items-center justify-content-between"><p className="mb-0">© 2023 - <a
                        className="text-muted">ShebaWiz</a>
                    </p>
                        <div>
                            <a href="#"><FaLinkedin /></a>
                            <a href="https://github.com/Kamyab7/shebawiz.git"><FaGithub style={{ marginLeft: '15px' }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer