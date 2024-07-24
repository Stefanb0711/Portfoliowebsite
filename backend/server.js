import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
import cors from "cors";
import {config} from "dotenv";

config();

const app = express();
const port = 5000;

const db = new pg.Client({
    user : "postgres",
    host : "localhost",
    database : "PortfolioProjects",
    password: "bonez187"//process.env.DATABASE_PW
});

db.connect();

app.use(bodyParser.json());


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));


app.post("/get-all-portfolio-projects", async (req, res) => {

    try{
        const result = await db.query("SELECT * FROM projects")

    } catch(err){
        console.error(err);
    }
})


app.post("/get-portfolio-projects-sorted-by-language", async (req, res) => {

    try{
        const result = await db.query("SELECT DISTINCT language, language_image FROM projects");
        console.log("Result Rows: ", result.rows);
        if(result.rows.length === 0){
            console.log("Keine Sprachen gefunden");
            return res.status(404).json({message: "Language not found"});
        }

    return res.status(200).json({message: "", languages: result.rows});

    }catch(err){
        console.error(err);
        return res.status(500).json({message: 'Internal Server Error'});
    }
})

app.post("/get-portfolio-projects-sorted-by-properties", async (req, res) => {

    try{

        const result = await db.query("");

    } catch(err){
        console.log();
    }
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
