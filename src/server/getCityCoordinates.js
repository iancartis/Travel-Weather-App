//Connect API City info
// const fetch = require('node-fetch');
// const dotenv = require("dotenv");
// require('dotenv').config();
//dotenv.config();
//const baseURL = process.env.baseURL
//const userName = process.env.userName
//http://api.geonames.org/searchJSON?q=
//const baseURL = `http://api.geonames.org/search?lang=en&username=${userName}&type=json&name=`;
//const geonamesUrl = `${geoNamesApiBaseUrl}${req.body.cityName}`;
async function getCoordinates(yourcity) {
    console.log(yourcity)
    const dotenv = require('dotenv');
    dotenv.config();
    const fetch = require('node-fetch');
    const baseURL = 'http://api.geonames.org/searchJSON?q=';
    const username = process.env.userName;
    const res = await fetch(`${baseURL}${yourcity}&maxRows=10&username=${username}`)
    const error = "Couldn't connect the API";
    try {
        const data = await res.json();
        const lng = data.geonames[0].lng
        const lat = data.geonames[0].lat

        return [lng, lat];
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

module.exports = getCoordinates