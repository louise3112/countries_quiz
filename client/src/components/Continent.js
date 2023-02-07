import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getACountry } from "../helpers/countryDataFetches"

const Continent = () => {
    const {continent} = useParams()

    const [countryContinent, setCountryContinent] = useState({})

    // useEffect(() => {
    //     getACountry(continent)
    //     .then(result => setCountryContinent(result))
    // })

    // const joinString = (objectValues) => {
    //     return objectValues? Object.values(objectValues).join(", "): ""
    // }

    return (
        <>
            <h4>Country Continent</h4>
            <p> Country Continent: {countryContinent.continent}</p>
        </>
    )
}