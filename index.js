const fs = require('fs')

//console.log("hello ");
fs.writeFileSync("notes.txt" , "this will be awesome " )// <--just by doing this we are not going to contain any output
//append
fs.appendFileSync("notes.txt" ," this is created by nodejs !")