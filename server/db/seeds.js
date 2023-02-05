import fetch from 'node-fetch'
import { getCountriesCollection } from './db_connection.js'

const getCountries = async function () {
    return fetch ("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(res => {
            return res.map(country => ({
                name: country.name.common,
                flag: country.flags.svg,
                population: country.population,
                language: country.languages,
                capital: country.capital ? country.capital[0]: null
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
                console.log("Collection deleted");
                return res
            })
        }
    })
    .then(res => {
        countriesCollection.insertMany(countriesList)
            .then(res => {
                console.log("Number of documents inserted: " + res.insertedCount);
                // to finish the run comand
                process.exit()
            })
        return res
    })
