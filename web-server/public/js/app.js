console.log("client site js file is loaded")
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne  = document.querySelector('#message-1')
const messagetwo  = document.querySelector('#message-2')

weatherForm.addEventListener('submit' , (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'loading...'
    messagetwo.textContent = ''
    
// fetch('http://localhost:3000/address?address= ' + location).then((response) => {
    
    fetch('/address?address= ' + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
       //     console.log(data.error);
       messageOne.textContent = data.error
        } else{
            // console.log(data.location)
            // console.log(data.forecast);
            messageOne.textContent = data.location
            messagetwo.textContent = data.forecast
        }
    })
})
//    console.log('testing');
   // console.log(location);
})

