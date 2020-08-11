console.log("client site js file is loaded")
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/address?address=palampur').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
        } else{
            console.log(data.location)
            console.log(data.forecast);
        }
    })
})

