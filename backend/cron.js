import {cron} from "cron";
import * as https from "node:https";

const backendURL = "http://localhost:5000";
const job = new cron.CronJob('*/1 * * * *', function (){
    console.log("Restarting Server");

    https
        .get(backendURL, (res) => {
        if (res.statusCode === 200) {
            console.log("Server restarted");
        } else {
            console.error(`Failed to restart server with status code: ${res.statusCode}`);
        }
    }).on("error", (err) => {
    console.error("Error during Restart:", err.message);
    });
});

module.exports = {
    job,
};