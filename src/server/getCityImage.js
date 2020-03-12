async function getCityImage(yourcity) {
    const dotenv = require('dotenv');
    dotenv.config();
    const fetch = require('node-fetch');
    const API_KEY = process.env.IMAGE_API_KEY;
    const URL = process.env.IMAGE_URL

    const res = await fetch(`${URL}${API_KEY}&q=${yourcity}`);
    //console.log(`${URL}${API_KEY}&q=${yourcity}`)

    const error = "Couldn't connect the API";
    try {

        const data = await res.json();
        const imageurl = data.hits[0].largeImageURL;
        //console.log(imageurl)
        return imageurl;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }

}
module.exports = getCityImage;