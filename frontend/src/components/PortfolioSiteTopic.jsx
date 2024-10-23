import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import PortfolioCard from "./PortfolioCard";
import "../assets/css/myStyles.css";

function PortfolioSiteTopic(){


    const location = useLocation();

    const [selectedProjects, setSelectedProjects] = useState([]);
    const [properties, setProperties] = useState([]);

    async function getTopicProjects(){
        const currentPath = location["pathname"];

        const data = {path: currentPath};


        try{
            const response= await axios.post("https://backend-7k0f.onrender.com/get-topic-projects", data, {
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

        <div style={{paddingBottom: "20px", margin: "auto", marginLeft: "30px"}}>
            {selectedProjects.length === 0 ? (
                <p>Loading projects...</p>
            ) : (
                selectedProjects.map((project) => (
                    <PortfolioCard
                        key={project.id}
                        id={project.id}
                        title={project.name}
                        description={project.properties} // Übergebe properties als Array
                        image={project.project_image}
                    />
                ))
            )}
        </div>

    );
}

export default PortfolioSiteTopic;