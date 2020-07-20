const chalk = require('chalk')
const getnotes = require('./utils.js')
const yargs = require('yargs')
// // const command = process.argv[2];
// //console.log(process.argv);
// //customize yargs version
// yargs.version('1.1.0');


// //add, remove, read, list

// //create add command
// yargs.command({
//     command : "add",
//     describe: "add a new note",
//     builder: {
//         title: {
//             describe: 'note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'actual content is here',
//             demandOption: true,
//             type: 'string'

//         }

//     },
//     handler: function(argv){
//       //  console.log("adding a new note",argv);
//       console.log("title: " + argv.title);
//       console.log("body: " + argv.body);
//     }
// })
// //create remove command
// yargs.command({
//     command : "remove",
//     describe: "removing  note",
//     handler: function(){
//         console.log("removing a new note");
//     }
// })
// // read commands
// yargs.command({
//     command : "read",
//     describe: "reading note",
//     handler: function(){
//         console.log("print placeholder");
//     }
// })
// //list commands
// yargs.command({
//     command : "list",
//     describe: "list notes",
//     handler: function(){
//         console.log("new note is listed");
//     }
// })
// yargs.parse();
// //console.log(yargs.argv);



// // if(command === "add"){
// //     console.log('adding notes');
// // }else if(command === "remove"){
// //     console.log("statement is removed");
// // }else {
// //     console.log("nothing happens");
// // }



// // const fs = require('fs')

// // //console.log("hello ");
// // fs.writeFileSync("notes.txt" , "this will be awesome " )// <--just by doing this we are not going to contain any output
// // //append
// // fs.appendFileSync("notes.txt" ," this is created by nodejs !")

// //  const add = require('./utils.js')
// // //const name = 'ankita';
// // //console.log(nam);
// // const sum = add(6,8);
// // console.log(sum);
// //const validator = require('validator')
// // const getnotes = require('./utils.js')
// // const notes = getnotes("your notes are here");
// // console.log(notes);
// //console.log(validator.isEmail("ankita@gmail.com"));
// //console.log(validator.isEmail("gmail.com"));//this packsge return true if something is valid and false if something is not valid    
// //to check url
// //console.log(validator.isURL("https://pen.io"));
// //const chalk = require('chalk')
// // console.log(chalk.yellow.bgRed.inverse.bold('warning'));
// // console.log(chalk.blue.bgRed.inverse.bold('warning'));  //inplace of node index.js write nodemon index.js and these changes will occur autimaticall
// // //getting ip from user
// // //console.log(process.argv);
// // console.log(process.argv[2]);