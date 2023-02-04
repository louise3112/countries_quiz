import {MongoClient} from 'mongodb'

export const getCountriesCollection = async function () {
    return MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
    .then(client => {
        const db = client.db('countries_quiz')
        const countriesCollection = db.collection('countries')
        return countriesCollection
    })
    .catch(console.err);
}

