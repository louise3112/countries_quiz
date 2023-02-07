import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getACountry } from "../helpers/countryDataFetches"

const Country = () => {
    const {id} = useParams()

    const [countryDetails, setCountryDetails] = useState({})

    useEffect(() => {
        getACountry(id)
        .then(result => setCountryDetails(result))
    })

    const joinString = (objectValues) => {
        console.log(objectValues)
        return objectValues? Object.values(objectValues).join(", ") : ""
    }

    const joinStringNestedObject = (objectValues) => {
        console.log(objectValues)
        return objectValues? Object.values(objectValues).map(currency=> currency.name).join(", ") : ""
    }

    return (
            <>
                <h4>Country Details</h4> 
                <p> Country Name: {countryDetails.name}</p>
                <p>Country Region: {countryDetails.region}</p>
                <p>Country Subregion: {countryDetails.subregion}</p>
                <p>Languages: {joinString(countryDetails.language)}</p>
                <img src={countryDetails.flag} width="100"></img>
                <p>Currency: {joinStringNestedObject(countryDetails.currencies)}</p>
                <p>Borders: {countryDetails.borders? countryDetails.borders.join(", ") : ""}</p>
                <p>Population: {countryDetails.population}</p>
                <p>Capital: {countryDetails.capital}</p>
                <p>Latitude: {countryDetails.latitude}</p>
                <p>Latitude: {countryDetails.latitude}</p>
            </>
    )
}

export default Country