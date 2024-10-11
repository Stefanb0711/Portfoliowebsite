import React, {useEffect} from 'react';
import {useNavigate, Link} from "react-router-dom";

function Header() {

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // Stelle sicher, dass der Header immer die gleiche Farbe behält
            const header = document.querySelector('#header');
            header.style.backgroundColor = '#3d4d6a'; // Immer blau
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialer Aufruf um sicherzustellen, dass es beim Laden der Seite auch blau ist

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <a href="index.html" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">Stefans Portfolio</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to="/">Start</Link></li>
                        <li><Link to="/über-mich">Über mich</Link></li>

                        <li className="dropdown">
                            <Link to="/portfolio"><span>Portfolio</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                            <ul>
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
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        </header>
    )
}

export default Header;