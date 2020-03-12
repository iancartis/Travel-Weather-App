async function getWeather(lng, lat) {
    //Connect API City info
    const fetch = require('node-fetch');
    const dotenv = require("dotenv");
    // require('dotenv').config();
    dotenv.config();

    const baseURL = process.env.WEATHER_URL;
    const API_KEY = process.env.WEATHER_API_KEY;
    const res = await fetch(`${baseURL}${API_KEY}/${lng},${lat}`)
        //console.log(`${baseURL}${API_KEY}/${lng},${lat}`)

    const error = "Couldn't connect the API";
    try {
        const data = await res.json();
        const weathersummary = data.currently.summary;
        const temperature = data.currently.temperature;
        //     //console.log(weathersummary,temperature,'second api data of sum and temp')

        return [weathersummary, temperature];
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

module.exports = getWeather