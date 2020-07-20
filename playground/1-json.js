const fs = require('fs')
// const book = {
//     title: "ego is the enemy",
//     author: "ryan holiday"
// }
// const jsonbook = JSON.stringify(book);
// // console.log(jsonbook);
// // //console.log(jsonbook.title);
// // //jsonbook is a string not a object , book has title jsonbook does not have any title

// // const parseData = JSON.parse(jsonbook)
// // console.log(parseData.author);
// fs.writeFileSync('1-json.json' , jsonbook)

// const bufferData = fs.readFileSync('1-json.json') //gets data
// // console.log(bufferData);//geys buffer data
// // console.log(bufferData.toString());//gets string
// const datajson = bufferData.toString(); // converted into string
// const data = JSON.parse(datajson) // converted into object
// console.log(data.title);

//challenge

const bufferData = fs.readFileSync('1-json.json') //gets data
 
 const datajson = bufferData.toString(); // converted into string
 const user = JSON.parse(datajson) // converted into object
 user.name = 'Ankita'
 user.age = 19

 const userJson = JSON.stringify(user)
 fs.writeFileSync('1-json.json' , userJson)
