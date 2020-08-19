const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' , {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const User = mongoose.model('User' , {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error ("Age should be positive number")
            }
        }
    }
})

const me = new User({
    name: "    Ankita",
    //age: 19
    age: 19,
    email: "   ANKITAKAPOOR@GMAIL.COM"
})

me.save().then(() =>{
    console.log(me);
}).catch((error) =>{
    console.log("error! " , error);
})


                            //CHALLENGE
    
const Tasks = mongoose.model('Tasks' , {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

// const Task = new Tasks ({
//     description: "Udemy",
//     completed: true
// })

// Task.save().then(() =>{
//     console.log(Task);
// }).catch((error) =>{
//     console.log("error!" , error);
// })