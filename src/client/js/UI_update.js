// Updating client side data passing Data object from server side
const getInfoUI = weatherData => {
    console.log(weatherData);
    document.getElementById('image').innerHTML = `<img src="${weatherData.imageurl}">`;
    document.getElementById('start_date').innerHTML = `Your trip to ${weatherData.city} will start in ${weatherData.departtime} and it will last ${weatherData.future}`;
    document.getElementById('duration').innerHTML = `The temperature in ${weatherData.city} will be ${weatherData.temperature}`;
    document.getElementById('summary').innerHTML = `With ${weatherData.summary} weather`;


    return weatherData;
}




export {
    getInfoUI
}