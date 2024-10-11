import React from "react";
import {useNavigate, Link, useLocation} from "react-router-dom";
import TopicTag from "./TopicTag";
import "../assets/css/myStyles.css";

function PortfolioCard(props){

    const location = useLocation();

     //if (location.pathname.includes("portfolio"))

    const description = Array.from(props.description);

    const title = String(props.title).toLowerCase();

    return (
       <div style={{paddingBottom: "20px", margin: "auto"}} className="row gy-4 isotope-container" data-aos-delay="200">
    <Link to={location.pathname.includes("portfolio") ? `/${title}` : `/portfolio/${props.id}`} style={{ display: "block", textDecoration: "none" }}>
        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img src={props.image} className="img-fluid" alt=""/>
            <div className="portfolio-info">
                <h4>{props.title}</h4>
                {description.map((property, index) => (
                    <TopicTag key={index} topic={property} />
                ))}
                <a href={props.image} title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                </a>
                <a href="portfolio-details.html" title="More Details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                </a>
            </div>
        </div>
    </Link>
</div>

    );
}

export default PortfolioCard;