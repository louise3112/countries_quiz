import fetch from 'node-fetch'
import { getCountriesCollection, getStatsCollection } from './db_connection.js'

const getCountries = async function () {
    return fetch ("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(res => res.filter(country => country.unMember))
        .then(res => {
            return res.map(country => ({
                name: country.name.common,
                code: country.cca3,
                flag: country.flags.svg,
                population: country.population,
                language: country.languages, // array
                capital: country.capital[0],
                region: country.region,
                subregion: country.subregion,
                latitude: country.latlng[0],
                longitude: country.latlng[1],
                maps: country.maps.googleMaps,
                timezones: country.timezones, //array
                continents: country.continents, // array
                currencies: country.currencies, // object
                landlocked: country.landlocked,// boolean
                borders: country.borders // array
            }))
        })
}

const countriesList = await getCountries()
const countriesCollection = await getCountriesCollection()
countriesCollection.estimatedDocumentCount({})
    .then(collectionCount => {
        // if collection is not empty clean it
        if (collectionCount > 0) {
            countriesCollection.drop()
            .then(res => {
                console.log("Countries collection deleted");
                return res
            })
        }
    })
    .then(res => {
        countriesCollection.insertMany(countriesList)
            .then(res => {
                console.log("Number of country documents inserted: " + res.insertedCount);
                // to finish the run comand
                process.exit()
            })
        return res
    })

const statsCollection = await getStatsCollection()
statsCollection.estimatedDocumentCount({})
    .then(collectionCount => {
        if (collectionCount > 0) {
            statsCollection.drop()
                .then(res => {
                    console.log("Stats collection deleted")
                    return res
                })
        }
    })
    .then(res => {
        statsCollection.insertMany(
            [{
                username : "testUser",
                popGame : {
                    played : 0,
                    won : 0,
                    correctGuesses : []
                },
                flagQuiz : {
                    highStreak : 0,
                    currentStreak : 0
                }
            }])
            .then(res => {
                console.log("Number of stats documents inserted: " + res.insertedCount)
                process.exit()
            })
        return res
    })