import { getCountriesCollection } from './db/db_connection.js'
import express from 'express'
const app = express()


import cors from 'cors'
app.use(cors())
app.use(express.json())


import {createRouter} from './helpers/create_router.js'
const countriesCollection = await getCountriesCollection()
const countriesRouter = createRouter(countriesCollection)
app.use('/api/countries', countriesRouter)


app.listen(9000, function(){
    console.log(`Listening on port ${this.address().port}`)
})