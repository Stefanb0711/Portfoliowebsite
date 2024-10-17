import React, {useState, useEffect} from "react";
import SortByInput from "./components/sortByInput";
import PortfolioCard from "./components/PortfolioCard";
import axios from "axios";


function Portfolio(){

    const [portfolioProjects, setPortfolioprojects] = useState([]);

    const [projectGroups, setProjectGroups] = useState([]);


    async function getLanguages(){

      const response = await axios.post("http://localhost:5000/get-portfolio-projects-sorted-by-language");

      setProjectGroups(response.data["languages"]);

        console.log("ProjectGroups: ", response.data["languages"]);

        projectGroups.map((projectGroup) => {
            return console.log("Sprache", projectGroup["language"] );
        })


    if (response.data === []){
        console.log("No Languages found");
        return;
    }

    console.log("Eine ausgewählte Sprache: ", response.data["languages"][0]["language"]);



    }

     /*useEffect(() => {
            getLanguages();
        }, []);*/



    async function getProperties() {

        try{

            const response = await axios.post("https://backend-7k0f.onrender.com/get-portfolio-projects-sorted-by-properties");

        if (response.data === []){
            console.log("No Languages found");
            return;
        }

        setPortfolioprojects(response.data["properties"]);

        } catch(err){
            console.error(err);
        }



    }

    return(
        <section id="portfolio" class="portfolio section">

          <SortByInput sortByLanguage={getLanguages} sortByProperties={getProperties} />

      {/* Section Title */}
      <div class="container section-title" >
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul class="portfolio-filters isotope-filters" data-aos-delay="100">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>{/* End Portfolio Filters */}

            {projectGroups.map((projectGroup) => {
                return <PortfolioCard title={projectGroup["language"]} description="" image={projectGroup["language_image"]} />
            })}


        </div>

      </div>

    </section>
        
    );
}

export default Portfolio;