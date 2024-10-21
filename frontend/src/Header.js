import React, {useEffect} from 'react';
import {useNavigate, a} from "react-router-dom";

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
        <header id="header" className=" custom-header header d-flex align-items-center sticky-top text-center">


            <a href="/" style={{marginLeft: "30px"}} className="logo d-flex align-items-center me-auto">
                <h1 className="sitename">Stefans Portfolio</h1>
            </a>

            <nav style={{marginRight: "70px"}} id="navmenu" className="navmenu">
                <ul>
                    <li><a href="/">Start</a></li>
                    <li><a href="/über-mich">Über mich</a></li>

                    <li style={{marginRight: "60px"}} className="dropdown">
                        <a href="/portfolio"><span>Portfolio</span> </a>
                        <ul >
                            <li className="dropdown">
                                <a href="/python"><span>Python</span> </a>

                            </li>

                            <li className="dropdown">
                                <a href="/javascript"><span>Javascript</span></a>
                            </li>

                            <li className="dropdown">
                                <a href="/frontend-backend"><span>Webentwicklung</span> </a>
                            </li>

                            <li className="dropdown">
                                <a href="/dataanalysis"><span>Datenanalyse</span></a>
                            </li>

                            <li className="dropdown">
                                <a href="/gui"><span>GUI</span> </a>
                            </li>


                            <li><a href="/ethical-hacking">Ethical Hacking</a></li>
                        </ul>
                    </li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
        </header>
    )
}

export default Header;