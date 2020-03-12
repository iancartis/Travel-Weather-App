// Require modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
//const fetch = require('node-fetch');
var path = require("path");
const app = express();

const getCoordinates = require('./getCityCoordinates');
const getWeather = require('./getCityWeather');
const getCityImage = require('./getCityImage');






//Here we are configuring express to use body-parser as middle-ware.


app.use(express.static("dist"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());

// Initialize the main project folder
//app.use(express.static("../src"));
//console.log(__dirname);

// Spin up the server
const port = 3030;
const server = app.listen(port, listening);
const weatherData = [];
app.get('/', (request, response) => {
    response.sendFile('dist/index.html');
});

function listening() {
    console.log(`the port of this server is ${port}`);
    // console.log(`Your API key is ${process.env.WEATHER_API_KEY}`);
}
app.post("/data", function(req, res) {
    console.log('data received', req.body)
    departtime = req.body.departtime;
    nowtime = req.body.nowtime;
    inputCity = req.body.city;
    duration = req.body.duration;
    future = req.body.future
    getCoordinates(inputCity)
        .then(data => getWeather(data[0], data[1]))
        .then(function(data) {
            wsumary = data[0];
            wtemperature = data[1];
            console.log(wtemperature, wsumary)
        })
        .then(data => getCityImage(inputCity))
        .then(function(data) {
            let weatherData = {};
            imageurl = data;
            console.log({
                imageurl: imageurl,
                summary: wsumary,
                departtime: departtime,
                nowtime: nowtime,
                city: inputCity,
                temperature: wtemperature
            });

                weatherData.imageurl = imageurl;
                weatherData.summary = wsumary;
                weatherData.departtime = departtime;
                weatherData.nowtime = nowtime;
                weatherData.city = inputCity;
                weatherData.temperature = wtemperature;
                weatherData.future = future;
                res.send(weatherData)
                
                

            })
        })

    // console.log(req.body.formText),
    //     getCityInfo = req.body.formText,
    //     function(error, res) {
    //         if (error === null) {
    //             console.log(res)
    //             res.send(res);
    //         }
    //         console.log(error);
    //     }
