
## Description

This project consists on the creation of a website using webpack, babel, async calls to an API on the server side, content caching using Micro Services and the use oj Jest in order to test all of the Js files
### Requirements

*   This project includes these functionalities: 
  *   Prod and Dev webpack config fyles.
  *   Use of async calls to fetch info from an API
  *   Passing variables from the UI to the server side using async calls
  *   Send info from the server to the client side in order to update the UI
  *   Cache the content using microservices
  *   Test the app using Jest

### Guide
The project should get the Data from the user using the form on the client side.
The indexscript.js recovers the data and send it back to the server to be processed.
Once in the server each script process the data to recover results from the API's:
*   getCityCoordinates: recovers the lat and long from the Geoname API
*   getCityWeather: uses the lat and long to get the temperature and weather of the selected city
*   getCityImage: Uses the city selected to call the Pixabay API and recover an image of the city

Finally the Index js process all of the API calls using an async function which will sendback to the client al the info
Last but not least, UI_update will catch the object and present in on a DIV using the innerHTML method for each piece of data.

### ENV file
The env file stores the API KEYS for each API
Names are pretty self explanatory:
For the weather API
* WEATHER_API_KEY
* WEATHER_URL

For Pixabay API:
* IMAGE_API_KEY
* IMAGE_URL

For Geonames API (lat and long data):
* baseURL 
* userName 

### Suggestions to Make Your Project Stand Out!
In order to improve the project the indexscript.js process both the departure and arrival dates to show the end date and the length of trip


