import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import PortfolioCard from "./PortfolioCard";

function PortfolioSiteTopic(){


    const location = useLocation();

    const [selectedProjects, setSelectedProjects] = useState([]);
    const [properties, setProperties] = useState([]);

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

    useEffect(() => {
        console.log("SelectedProjects: ", selectedProjects);
    }, []);


    return (

        <div>
            {selectedProjects.length === 0 ? (
                <p>Loading projects...</p>
            ) : (
                selectedProjects.map((project) => (
                    <PortfolioCard
                        key={project.id}
                        title={project.name}
                        description={project.properties} // Übergebe properties als Array
                        image={project.property_image}
                    />
                ))
            )}
        </div>

    );
}

export default PortfolioSiteTopic;