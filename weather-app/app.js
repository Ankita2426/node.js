console.log("starting");

setTimeout(() => {
    console.log('2 second timer');
}, 2000)


setTimeout(() => {
    console.log('0 second timer');
}, 0)   
//here 0 second timer is printed after stopping. because some internals of nodejs are resposible for it

console.log("stopping");