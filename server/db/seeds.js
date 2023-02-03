// use hotel;
// db.dropDatabase();


// db.bookings.insertMany([
//     {name: "Bob McJim",
//     email: "bobmcjim@gmail.com",
//     checkedin: false},
    
//     {name: "Ruby Sparks",
//     email: "rubydooby@gmail.com",
//     checkedin: true}
// ])


// use countries_quiz
// db.dropDatabase()



// const https = require('https');

// const listOfCountries = https.get("https://restcountries.com/v3.1/all", (resp) => {

//     let data = ''

//     // A chunk of data has been received.
//     resp.on('data', (chunk) => {
//         data += chunk;
//     })

//     // The whole response has been received. Print out the result.
//     resp.on('end', () => {
//         console.log(JSON.parse(data));
//     });

//     })
//         .on("error", (err) => {
//             console.log("Error: " + err.message);

//     const response = JSON.parse(data)
//     return response
    
// });


const getCountries = function () {
    fetch ("https://restcountries.com/v3.1/all")
        .then(res => {
            const listOfCountries = res.json()
            return listOfCountries
        })
}

console.log(getCountries())


// npm install request@2.81.0

// const request = require('request');

// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body.url);
//     console.log(body.explanation);
// });

// async getCountries = () => {
//     const res = await fetch("https://restcountries.com/v3.1/all")
//     if (res.ok) {
//         const data = await res.json()
//         console.log(data)
//     }
// }


// const listOfCountries = getCountries()

// console.log(listOfCountries[0])

// db.countries.insertMany(getCountries())