import { Link } from "react-router-dom";
import '../../style/hedernavfooter.css';


export default function NavBar(){
    return(
        <nav className="navbar is-fixed-top has-background-light is-success" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item"  href="http://localhost:5173/">
                    <p className="title is-5 title-color">ICMASa</p>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                <Link className="navbar-item title-color navbarIcmasa" to="/institucion"> Institución </Link>
                    <a className="navbar-item title-color">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link title-color">More</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">About</a>
                            <a className="navbar-item is-selected">Jobs</a>
                            <a className="navbar-item">Contact</a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">Report an issue</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

