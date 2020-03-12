import {
    getInfoUI
} from './UI_update'

//Require moment library to process data objects
let moment = require('moment');
const button = document.getElementById('submit');

//Listening to click event on each form element to create the object which will be sended to the server
button.addEventListener('click', async function() {
    const nowtime = moment().format("MMM Do YY");
    let departtime = new Date(document.getElementById('departure').value);
    let departtime_value = moment(departtime).format("MMM Do YY");
    let returntime = new Date(document.getElementById('arrival').value);
    let returntime_value = moment(returntime).format("MMM Do YY");

    const postData = async(url = '', data = {}) => {
            const res = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            // console.log(`This is nowtime ${nowtime}`);
            // console.log(`This is departtime ${departtime_value}`);
            // console.log(`This is returntime ${returntime_value}`);



            const result = await res.json();
            return result
        }
        // console.log(`This is returntime ${returntime}`);
        // console.log(`This is departtime ${departtime}`);
        // console.log(`This is departtime ${(returntime-departtime)/1000/60/60/24}`);





    const formText = {
        departtime: moment(new Date(document.getElementById('departure').value)).format("MMM Do YY"),
        nowtime: moment().format("MMM Do YY"),
        city: document.getElementById('destination').value,
        future: ((returntime - departtime) / 1000 / 60 / 60 / 24)
    };

    // console.log(`This is formtext value ${formText}`);

    //Finally posting via async funciton the Form text object to the server
    const result = await postData('http://localhost:3030/data', formText);
    getInfoUI(result)

});