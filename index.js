const fetch = require('node-fetch') // Only works in node, browers already have fetch

// fetch('https://espn.com') // url, endpoint
// .then(response => {
//     return response.text()
// } )

// fetch('https://api.github.com/users/fletch8')
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data)
// })

fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(dataArray => {
    // console.log(dataArray)
    let c102 = dataArray[1];
    let capsuleSerial = c102['capsule_serial']
    let capstat = c102.status
    console.log(c102)
    console.log(capsuleSerial)
})