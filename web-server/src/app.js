
//app.com
//app.com/help
//app.com/about

const express = require('express')
const path = require('path')

console.log(__dirname);
//console.log(__filename);
const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")
app.use(express.static(publicDirectoryPath))


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
    res.send('i dont wanna talk')

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
