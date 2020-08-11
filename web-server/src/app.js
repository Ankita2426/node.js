const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(__dirname);
//console.log(__filename);

const app = express()
//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname , "../template/views")
const partialsPath = path.join(__dirname , "../template/partials")

//setup handlebars engine and view location
app.set('view engine' , 'hbs')
app.set('views' , viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('' , (req,res) => {
    res.render('index' , {
        title: "weather-app",
        name:  "Ankita"
    })
})


app.get('/about' , (req,res) => {
    res.render('about' , {
        title: "about me",
        name:  "Ankita"
    })
})


app.get('/weather' , (req,res) => {
    res.render('weather' , {
        title: "today is rainy",
        name:  "Ankita"
    })
})


// app.get('' , (req,res) => {
//     res.send('hello express')

// })


// app.get('/help' , (req,res) => {
//     res.send('help page')

// })
//sending html

app.get('' , (req,res) => {
    res.send('<h1>over all is a good person</h1>')

})

//json
app.get('/help' , (req,res) => {
    res.send({
        title:  "help",
        name: "Ankita",
        age: 19,
        height: 163,
        good_qualities: "calm",
        bad: "doesn't understand",

    })

})

app.get('/about' , (req,res) => {
    res.send('but i m angry ')

})

app.get('/weather' , (req,res) => {
    res.send({
        forecast: 'it is sunny',
        location: 'palampur'
    })

})

app.get('/address' , (req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'you must provide address'
        })
    }
    geocode(req.query.address, (error , {latitude, longitude , location} = {}) => {
        if (error) {
            return res.send({error})
        }
        forecast(latitude, longitude , (error , forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    // res.send({
    //     forecast: 'it is sunny',
    //     location: 'palampur',
    //     address: req.query.address      
    // })

})
app.get('/weather/*' , (req,res) => {
   // res.send('cant find weather')
   res.render('404' ,{
    title:  '404',
    name: "Ankita",
    errormessage: 'weather not found'
})

})

app.get('/products' , (req,res) => {
    if(!req.query.search){
        return res.send({
            error: 'you must provide a search term'
        })
    }
    console.log(req.query); 
    console.log(req.query.search);
    res.send({
        
        products: []
    })

})

app.get('*' , (req,res) => {
   // res.send('my 404 page')
   res.render('404' ,{
       title:  '404',
       name: "Ankita",
       errormessage: 'page not found'
   })

})

app.listen(3000 , () =>{
    console.log("server is up on port 3000");
})

//array
app.get('/array' , (req,res) => {
    res.send([{
        name: 'Ankita'
    },{
        name: "kapoor"
    } ])

})
