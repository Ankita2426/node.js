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
//console.log(id.id.length);
//console.log(id.toHexString().length);

MongoClient.connect(connectionURL , { useUnifiedTopology : true } , (error , client ) =>{
    if(error){
        return console.log('unable to connect to database!');
    }
  //  console.log('connected correctly!');
    const db = client.db(databaseName)
    //  //UPDATE USE FILTER

    //  const updatePromise = db.collection('users').updateOne({
    //      _id: new ObjectID("5f3b8da5086556455c3d9abd")
    //  }, {
    //     //  $set: {
    //     //      name: "Hardeep"
    //     //  }
    //     $inc:{
    //         age: 2
    //     }
    //  })
    //  updatePromise.then((result) =>{
    //      console.log(result);
    //  }).catch((error)=> {
    //     console.log(error);
    //  })

    //challenge (under task)   update many

    db.collection("Tasks").updateMany({
        completed: "False"
    } ,{
        $set:{
            completed: "True"
        }
    }).then((result) =>{
         console.log(result.modifiedCount);
     }).catch((error)=> {
        console.log(error);
     })

})

            //create

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


    
//     //FINDONE READ
// // //SEARCH BY NAME AND AGE

// //     // db.collection('users').findOne({ name: "Ankita" , age: 19}, (error ,user) => {
// //         //SEARCH BY ID

// //         db.collection('users').findOne({ _id: new ObjectID("5f3b8da5086556455c3d9abd")}, (error ,user) => { 
// //         // db.collection('users').findOne({ _id: "5f3b8da5086556455c3d9abd"}, (error ,user) => {//it will return null because its not string its a binary data we need to give objectId
// //         if(error){
// //             console.log("unable to fetch")
// //         }
// //         console.log(user);
// //     })

// //FIND
// //by searching with id it wound be nonsense because id is unique
// db.collection('users').find({age: 19}).toArray((error , users) =>{
//     console.log(users);
// })

// db.collection('users').find({age: 19}).count((error , users) =>{
//     console.log(users);
// })



// //challenge
//         //findone
// db.collection('Tasks').findOne({ _id: new ObjectID("5f3b8f4287730f279c0c57da")} , (error , user) =>{
//     console.log(user);
// })

// //find
// db.collection('Tasks').find({completed: "False"}).toArray((error,userss) =>{
//     console.log(userss);
// })

