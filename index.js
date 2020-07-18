// const fs = require('fs')

// //console.log("hello ");
// fs.writeFileSync("notes.txt" , "this will be awesome " )// <--just by doing this we are not going to contain any output
// //append
// fs.appendFileSync("notes.txt" ," this is created by nodejs !")

//  const add = require('./utils.js')
// //const name = 'ankita';
// //console.log(nam);
// const sum = add(6,8);
// console.log(sum);
const getnotes = require('./utils.js')
const notes = getnotes();
console.log(notes);