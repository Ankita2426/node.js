const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// // // const url = "http://api.weatherstack.com/current?access_key=e966ff17ea74b9ab332a581b8117fb0f&query=32.1109,%2076.5363"
// // //units are also added
// // //const url = "http://api.weatherstack.com/current?access_key=e966ff17ea74b9ab332a581b8117fb0f&query=32.1109,%2076.5363&units=f"
// // const url = "http://api.weatherstack.com/current?access_key=e966ff17ea74b9ab332a581b8117fb0f&query=&units=f"

// // request({url: url, json: true}, (error,response) => {
// //     if(error){
// //         console.log("unable to connect to weather service. please check your internet connection.");
// //     }else if(response.body.error){
// //         console.log("unable to find location");
// //     }else{
// //         console.log(response.body.current.weather_descriptions[0] + ". it is currently " + response.body.current.temperature + " and its feel like " + response.body.current.feelslike);
// //     }
// //   //  console.log(error);
// // //    // console.log(response);
// // //    const data = JSON.parse(response.body)
// // //    console.log(data.current);
// // //console.log(response.body.current);
// //   //  console.log("it is currently " + response.body.current.temperature + " and its feel like " + response.body.current.feelslike);
// //  })



// //challenge

// // //const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoiYW5raXRhMjQyNiIsImEiOiJja2RlZjBtcWgwbGNjMnFucm1sOTNmOHhsIn0.Og8ohhqSwSZMQAEiLSElAw&limit=1"
// // const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/georgia.json?types=country&access_token=pk.eyJ1IjoiYW5raXRhMjQyNiIsImEiOiJja2RlZjBtcWgwbGNjMnFucm1sOTNmOHhsIn0.Og8ohhqSwSZMQAEiLSElAw"
// // request({url: url, json: true}, (error,response) => {
// //     if(error){
// //                 console.log("unable to connect to weather service. please check your internet connection.");
// //             }else if(response.body.features.length===0){
// //                 console.log("unable to find location,try another result");
// //             }else{
// //                 const long = response.body.features[0].center[0]
// //                 const lat = response.body.features[0].center[1]
// //                 console.log(long,lat);
// //             }
    
// //     })


// geocode('12what', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })




// // console.log("starting");

// // setTimeout(() => {
// //     console.log('2 second timer');
// // }, 2000)


// // setTimeout(() => {
// //     console.log('0 second timer');
// // }, 0)   
// // //here 0 second timer is printed after stopping. because some internals of nodejs are resposible for it

// // console.log("stopping")

////////////challenge


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(32.1109,2076.5363, (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })

//call chaining
// geocode('palampur', (error, data) => {
//   if(error){
//     return console.log(error);
//   }
//       // console.log('Error', error)
//       // console.log('Data', data)
//       forecast(data.latitude,data.longitude, (error, forecastdata) => {
//         if(error){
//           return console.log(error);
//         }
//         // console.log('Error', error)
//         // console.log('Data', forecastdata)
//         console.log(data.location);
//         console.log(forecastdata);
//       })
//   })
  //main thing left is user need to provide location without needing to modify source code
  // so we want palampur as a commant line argument

  
    const address = process.argv[2]
    if(!address){
      console.log("please provide an address!");
    } else{
   //   geocode('palampur', (error, data) => {
        geocode('palampur', (error, {latitude,longitude,location}) => {
        if(error){
          return console.log(error);
        }
            // console.log('Error', error)
            // console.log('Data', data)
          //  forecast(data.latitude,data.longitude, (error, forecastdata) => {
            
            forecast(latitude,longitude, (error, forecastdata) => {
              if(error){
                return console.log(error);
              }
              // console.log('Error', error)
              // console.log('Data', forecastdata)
             // console.log(data.location);
             console.log(location);
              console.log(forecastdata);
            })
        })
      
    }
    //console.log(process.argv)




  
  