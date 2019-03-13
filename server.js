/**
 * ExpressJS backend server
 * @pre - Make sure to parse the url and replace the following:
 *      : with %3A
 *      / with %2F
 * @type ExpressJS Backend Server that makes requests to Text Analysis API and returns the response
 * @author Justin Yau
 */
const express = require('express');
var unirest = require('unirest');

const app = express();
const apiKey = "7a9a8dd817mshe07f2c506c8d832p1ff971jsnb0ff5652a428";

app.get('/summary/', (req, res) => {
    unirest.get("https://aylien-text.p.rapidapi.com/summarize?url=".concat(req.url))
        .header("X-RapidAPI-Key", apiKey)
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
            if(result.status == "200") {
                res.json(result.body);
            } else {
                res.json({responseCode: result.status});
            }
    });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);