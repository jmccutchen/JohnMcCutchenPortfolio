import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function Header() {
    return (
        <header className="mainhead">
            <nav className="navbar navbar-expand-md navbar-dark border-bottom" id="mainhead" style={{ backgroundColor: '#293a80' }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-brand" id="myname">John McCutchen</div>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navStyle">
                        <li className="nav-item ">
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Story
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>


        </header>
    )
}