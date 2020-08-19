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
      password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error ('password cannot contain "password')
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

// const me = new User({
//     name: "    Ankita",
//     //age: 19
//     age: 19,
//     email: "   ANKITAKAPOOR@GMAIL.COM",
//   //  password: "    efh      "
//   //password: "Password123"
//   password: "Ankita$1234"
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error) =>{
//     console.log("error! " , error);
// })


                            //CHALLENGE
    
const Tasks = mongoose.model('Tasks' , {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = new Tasks ({
     description: "Udemy",
    // completed: true
})

Task.save().then(() =>{
    console.log(Task);
}).catch((error) =>{
    console.log("error!" , error);
})