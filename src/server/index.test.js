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
const regeneratorRuntime = require("regenerator-runtime");
test("It should be a function", async () => {
    expect(typeof getCoordinates('London')).toBe("object");
});