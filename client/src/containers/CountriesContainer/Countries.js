import { useEffect, useState } from "react"
import { getAllCountries } from "../../helpers/countryDataFetches"
import CountriesList from "../../components/CountriesList"

const Countries = () => {

    const [allCountries, setAllCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState (null)

    useEffect(() => {
        getAllCountries()
        .then(result => {
            console.log(result)
            setAllCountries(result)})
        .then(console.log(allCountries))
    }, [])


    return (
        <CountriesList allCountries={allCountries} />
    )

}

export default Countries
