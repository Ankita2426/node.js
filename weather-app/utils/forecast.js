const request = require('request')

const forecast = (latitude,longitude, callback) => {
  
    const url = "http://api.weatherstack.com/current?access_key=e966ff17ea74b9ab332a581b8117fb0f&query="+latitude+ ",%" + longitude+"&units=f"
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services! please check your internet connection', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined," it is currently " + response.body.current.temperature + " and its feel like " + response.body.current.feelslike)
        }
    })
}

module.exports = forecast