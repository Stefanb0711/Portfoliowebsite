import React, {useState, useEffect} from "react";
import SortByInput from "./components/sortByInput";
import PortfolioCard from "./components/PortfolioCard";
import axios from "axios";


function Portfolio(){

    const [filterStatus, setFilterStatus] = useState("inactive");

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

    setFilterStatus("languages");


    }

     /*useEffect(() => {
            getLanguages();
        }, []);*/



    async function getProperties() {

        try{

            const response = await axios.post("http://localhost:5000/get-portfolio-projects-sorted-by-properties");

        if (response.data === []){
            console.log("No Languages found");
            return;
        }
        setFilterStatus("properties");

        setProjectGroups(response.data["properties"]);

        } catch(err){
            console.error(err);
        }

    }

    return(
        <section style={{position: "relative"}} id="portfolio" class="portfolio section">

            <div>
                <SortByInput sortByLanguage={getLanguages} sortByProperties={getProperties} />
            </div>

      {/* Section Title */}
      <div class="container section-title" >
        <h2>Portfolio</h2>
      </div>{/* End Section Title */}

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">


            {filterStatus === "properties" && (
                <div>
                    {projectGroups.map((projectGroup) => {
                        return (<PortfolioCard index={projectGroup["id"]} title={projectGroup["main_topic"]} description=""
                                               image={projectGroup["property_image"]}/>)
                    })}
                </div>
            )}


            {filterStatus === "languages" && (
                <div>
                    {projectGroups.map((projectGroup) => {
                        return (<PortfolioCard index={projectGroup["id"]} title={projectGroup["language"]} description=""
                                               image={projectGroup["language_image"]} />)
                    })}
                </div>
            )}


        </div>

      </div>

    </section>
        
    );
}

export default Portfolio;