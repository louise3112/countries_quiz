import { useEffect, useState } from "react"
import { getAllCountries } from "../../helpers/countryDataFetches"
import CountriesList from "../../components/CountriesList"

const Countries = () => {

    const [allCountries, setAllCountries] = useState([])

    useEffect(() => {
        getAllCountries()
        .then(result => setAllCountries(result))
    }, [])


    return (
        <CountriesList allCountries={allCountries} />
    )

}

export default Countries
