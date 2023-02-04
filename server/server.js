import { getCountriesCollection } from './db_connection.js'
const express = require('express')
const app = express()


const cors = require('cors')
app.use(cors())
app.use(express.json())

const createRouter = require('./helpers/create_router');
const countriesCollection = await getCountriesCollection()
const countriesRouter = createRouter(countriesCollection)
app.use('/api/countries', countriesRouter)

app.listen(9000, function(){
    console.log(`Listening on port ${this.address().port}`)
})