import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";


function Header() {

    const navigate = useNavigate();


    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <a href="index.html" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">Arsha</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="">Start</a></li>
                        <li><a href="">Über mich</a></li>
                        <li><a href="">Blog</a></li>

                        <li className="dropdown">
                            <a href=""><span>Portfolio</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown">
                                    <a href="#"><span>Python</span> <i
                                        className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Webdevelopment</a></li>
                                        <li><a href="#">GUI-Programming</a></li>
                                        <li><a href="#">Webscraping</a></li>
                                        <li><a href="#">Games</a></li>
                                        <li><a href="#">GUI-Automation</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown">
                                    <a href="#"><span>Javascript</span> <i
                                        className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">React </a></li>
                                        <li><a href="#">GUI-Programming</a></li>
                                        <li><a href="#">Webscraping</a></li>
                                        <li><a href="#">Games</a></li>
                                        <li><a href="#">GUI-Automation</a></li>
                                    </ul>
                                </li>


                                <li><a href="#">Javascript</a></li>
                                <li><a href="#">Cpp</a></li>
                                <li><a href="#">Ethical Hacking</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <a className="btn-getstarted" href="#about">Get Started</a>
            </div>
        </header>
    );
}

export default Header;