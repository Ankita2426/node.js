const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()


// if(command === "add"){
//     console.log('adding notes');
// }else if(command === "remove"){
//     console.log("statement is removed");
// }else {
//     console.log("nothing happens");
// }



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