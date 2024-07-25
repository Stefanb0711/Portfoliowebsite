import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import PortfolioCard from "./PortfolioCard";

function PortfolioSiteTopic(){


    const location = useLocation();

    const [selectedProjects, setSelectedProjects] = useState([]);

    async function getTopicProjects(){
        const currentPath = location["pathname"];

        const data = {path: currentPath};

        try{
            const response = await axios.post("http://localhost:5000/get-topic-projects", data, {
            headers: {
                "Content-Type": "application/json",
            }
        } );

        if (response.data === []){
            console.log("Keine Daten gefunden");
            return;
        }

        console.log("responseDataProjects: ", response.data["projects"]);

        setSelectedProjects(response.data["projects"]);


        } catch(err){
            console.error(err);
        }


    }

    useEffect(() => {
        getTopicProjects();


    }, []);


    return(
        <div>

            {selectedProjects.map((project) =>{
                return (<PortfolioCard title={project["name"]} description={project["properties"][0]} image={project["property_image"]} />)
            })}


        </div>
    );
}

export default PortfolioSiteTopic;