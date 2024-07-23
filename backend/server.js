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
    password: process.env.DATABASE_PW
});

app.use(bodyParser.json());


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));


app.get("/portfolio", async (req, res) => {

    try{
        const result = await db.query("SELECT * FROM projects")

    } catch(err){
        console.error(err);
    }
})



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
