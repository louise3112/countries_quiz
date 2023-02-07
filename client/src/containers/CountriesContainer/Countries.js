import { useEffect, useState } from "react"
import { getAllCountries } from "../../helpers/countryDataFetches"
import CountriesList from "../../components/CountriesList"
import SearchCountryForm from "../../components/SearchCountryForm"

const Countries = () => {

    const [allCountries, setAllCountries] = useState([])
    const [searchText, setSearchText] = useState("")

    const handleChange =function(event) {
        setSearchText(event.target.value)
    }

    const searchedCountry = (allCountries, searchText) => {
        return allCountries.filter((country) => country.name.toLowerCase().includes(searchText) || country.code.toLowerCase().includes(searchText))
        

    }

    useEffect(() => {
        getAllCountries()
        .then(result => setAllCountries(result))
    }, [])


    return (
        <>
            <SearchCountryForm searchText={searchText} handleChange={handleChange}/>
            <CountriesList allCountries={searchedCountry(allCountries,searchText)} />
        </>
    )

}

export default Countries
