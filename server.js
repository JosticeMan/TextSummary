/**
 * ExpressJS backend server
 * @pre - Make sure to parse the url and replace the following:
 *      : with %3A
 *      / with %2F
 * @type ExpressJS Backend Server that makes requests to Text Analysis API and returns the response
 * @author Justin Yau
 */
var express = require('express');
var unirest = require('unirest');

var app = express();

/**
 * REPLACE THE EMPTY STRING FOR apiKey HERE TO DEMO THE WEB APP
 * @type {string)
 */
const apiKey = "";
/**
 * REPLACE THE EMPTY STRING FOR apiKey HERE TO DEMO THE WEB APP
 * @type {string)
 */

app.get('/process', (req, res) => {
    var requrl = req.header('url');
    if(requrl != null) {
        var curl = requrl.replace(":", "%3A").replace("/", "%2F");
        unirest.get("https://aylien-text.p.rapidapi.com/summarize?url=".concat(curl))
            .header("X-RapidAPI-Key", apiKey)
            .end(function (result) {
                console.log(result.status, result.headers, result.body);
                res.status(result.status).json(result.body);
            });
    } else {
        res.json({status: -1});
    }
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);