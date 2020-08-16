const request = require('request')

const forecast = (latitude,longitude, callback) => {
  
    const url = "http://api.weatherstack.com/current?access_key=e966ff17ea74b9ab332a581b8117fb0f&query="+latitude+ ",%" + longitude+"&units="
    // request({ url: url, json: true }, (error, response) => {
        request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services! please check your internet connection', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
        //     callback(undefined,response.body.current.weather_descriptions[0] +" it is currently " + response.body.current.temperature + " and its feel like " + response.body.current.feelslike)
        callback(undefined,body.current.weather_descriptions[0] +". It is currently " + body.current.temperature + " degrees out. and its feel like " + body.current.feelslike + " degrees out. The humidity is " + body.current.humidity + "%.")
    }
    })
}

module.exports = forecast