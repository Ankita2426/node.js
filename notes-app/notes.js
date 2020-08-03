const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

// const addNote =  (title, body) => {
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function (note) {
//         return note.title === title
//     })

//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log('New note added!')
//     } else {
//         console.log('Note title taken!')
//     }
// }


const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}
//create remove func
const removeNote = function (title){
   // console.log(title);
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title != title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('note removed'));
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('no note found'));
    }
    
}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else{
        console.log(chalk.red.inverse('note not found'));
    }

}
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    //export remove function
    removeNote: removeNote,
    listNotes:  listNotes,
    readNote:  readNote
}