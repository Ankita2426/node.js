// const square = function(a){
//     return a*a
// }

// const square = (a) => {
 //   return a*a
//}

// const square = (a) => a*a
// console.log(square(6));

// const event = {
//     name: "birthday party",
//     printGuestList :  function(){
//         console.log('guest list for ' + this.name);
//     }
// }
// event.printGuestList()


const event = {
    name: "birthday party",
    printGuestList  ()  {
        console.log('guest list for ' + this.name);
    }
}
event.printGuestList()