import React from 'react';

function Footer() {
    return (
        <footer id="footer" className="footer">

            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="d-flex align-items-center">
                            <span className="sitename">Kontaktdaten</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>Hennersdorferstraße 8</p>
                            <p>71093, Weil im Schönbuch</p>
                            <p className="mt-3"><strong>Telefonnummer: </strong> <span>+49 171 6196354</span></p>
                            <p><strong>Email:</strong> <span>stefanboehme12@gmail.com</span></p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Nützliche Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <a href="/">Start</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="/portfolio">Portfolio</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Projektthemen</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <a href="/frontend-backend">Webentwicklung</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="/dataanalysis">Datenanalyse</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="/gui">Spiele</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="/ethical-hacking">Ethical Hacking</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Über mich</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Lebenslauf</a></li>

                        </ul>
                    </div>

                </div>
            </div>


        </footer>
    );
}

export default Footer;
