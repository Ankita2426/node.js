const doWorkCallback = (callback) => {
    setTimeout(() => {
         callback('This is my error!', undefined)
        //callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})













// // setTimeout(() =>{
// //     console.log("2 sec delay");
// // },2000)

// // const names = ['ankita','dev','aman','kritik','hardeep','rajat','manish','swarnima','ritik']
// // const shortNames = names.filter((name) =>{
// //     return name.length <= 5
// // })

// // // const geoCode = (address,callback) => {
    
// // //         const data = {
// // //             latitude: 0,
// // //             longitude: 0
// // //         }
// // //         return data
// // //     }

// // //commnet either ab upr vala ya niche vla
// // const geoCode = (address,callback) => {
// //    setTimeout(()=>{
// //     const data = {
// //         latitude: 0,
// //         longitude: 0
// //     }
// //     //return data
// //     callback(data)
// //    },2000) 
   
// // }

// // // const data = geoCode('palampur')
// // // console.log(data);
// // geoCode('palampur', (data) =>{
// //     console.log(data);
// // })


// //challenge

// // Goal: Mess around with the callback pattern
// //
// // 1. Define an add function that accepts the correct arguments
// // 2. Use setTimeout to simulate a 2 second delay
// // 3. After 2 seconds are up, call the callback function with the sum
// // 4. Test your work!



// const add = (a,b,callback) =>{
//     setTimeout(() => {
//         callback(a+b)
//     }, 2000);
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })