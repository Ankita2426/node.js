const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' , {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const User = mongoose.model('User' , {
    name: {
        type: String
    }, 
    age: {
        type: Number
    }
})

// const me = new User({
//     name: "Ankita",
//     age: 19
// })

// me.save().then(() =>{
//     console.log(me);
// }).catch((error) =>{
//     console.log("error! " , error);
// })


                            //CHALLENGE
    
const Tasks = mongoose.model('Tasks' , {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
})

const Task = new Tasks ({
    description: "Udemy",
    completed: true
})

Task.save().then(() =>{
    console.log(Task);
}).catch((error) =>{
    console.log("error!" , error);
})