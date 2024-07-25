import React from "react";
import {useNavigate, Link} from "react-router-dom";
import TopicTag from "./TopicTag";

function PortfolioCard(props){

    return (
        <div class="row gy-4 isotope-container" data-aos-delay="200">
            <Link to={`/${props.title}`}>
            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={props.image} class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <TopicTag topic={props.description} />
                <a href={props.image } title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
            </Link >
        </div>
    );
}

export default PortfolioCard;