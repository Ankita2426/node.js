const request = require('request')
// // const url = "http://api.weatherstack.com/current?access_key=e966ff17ea74b9ab332a581b8117fb0f&query=32.1109,%2076.5363"
// //units are also added
// const url = "http://api.weatherstack.com/current?access_key=e966ff17ea74b9ab332a581b8117fb0f&query=32.1109,%2076.5363&units=f"

// request({url: url, json: true}, (error,response) => {
// //    // console.log(response);
// //    const data = JSON.parse(response.body)
// //    console.log(data.current);
// //console.log(response.body.current);
//   //  console.log("it is currently " + response.body.current.temperature + " and its feel like " + response.body.current.feelslike);
//   console.log(response.body.current.weather_descriptions[0] + ". it is currently " + response.body.current.temperature + " and its feel like " + response.body.current.feelslike);
// })



//challenge

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5raXRhMjQyNiIsImEiOiJja2RlZjBtcWgwbGNjMnFucm1sOTNmOHhsIn0.Og8ohhqSwSZMQAEiLSElAw&limit=1"

request({url: url, json: true}, (error,response) => {
     const long = response.body.features[0].center[0]
     const lat = response.body.features[0].center[1]
     console.log(long,lat);
    })
    
    






// console.log("starting");

// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000)


// setTimeout(() => {
//     console.log('0 second timer');
// }, 0)   
// //here 0 second timer is printed after stopping. because some internals of nodejs are resposible for it

// console.log("stopping");