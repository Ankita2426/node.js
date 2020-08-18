//CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient , ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id =  new ObjectID()
// console.log(id);
//console.log(id.getTimestamp());
//console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(connectionURL , { useUnifiedTopology : true } , (error , client ) =>{
    if(error){
        return console.log('unable to connect to database!');
    }
  //  console.log('connected correctly!');
    // const db = client.db(databaseName)

    //     db.collection('users').insertOne({
    //     _id: id,
    //     name: "Aman",
    //     age: 22
    // } , (error , result ) => {
    //     if(error){
    //         return console.log('unable to insert user');
    //     }
    //     console.log(result.ops);
    // })
//})
//     db.collection('users').insertOne({
//         name: "Ankita",
//         age: 19
//     } , (error , result ) => {
//         if(error){
//             return console.log('unable to insert user');
//         }
//         console.log(result.ops);
//     })
// })

// db.collection('users').insertMany([
//     {
//         name: "Ankita",
//         age: 19
//     }, {
//         name: "Dev",
//         age: 21
//     }
  
//  ] , (error , result ) => {
//     if(error){
//         return console.log('unable to insert user');
//     }
//     console.log(result.ops);
// })


// db.collection('Tasks').insertMany([
//     {
//         Description: "Udemy section",
//         completed: "True"
//     }, {
//         Description: "Cpp",
//         completed: "False"
//     },{
//         Description: "sql",
//         completed: "False"
//     }
  
//  ] , (error , result ) => {
//     if(error){
//         return console.log('unable to insert Task');
//     }
//     console.log(result.ops);
//     })
})