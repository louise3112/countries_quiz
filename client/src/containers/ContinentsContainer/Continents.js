import { useState, useEffect } from "react"
import ContinentsList from "../../components/ContinentsList"
import { getAllCountries } from "../../helpers/countryDataFetches"
import SearchCountryForm from "../../components/SearchCountryForm"

const Continents = () => {

    const [allContinents, setAllContinents] = useState([])
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
        .then(allCountries => {
            setAllCountries(allCountries)
            const allContinentsNamesWithDuplicates = allCountries.map(country => country.continents).flat(1)
            const uniqueContinentNames = Array.from(new Set([...allContinentsNamesWithDuplicates]).values())
            setAllContinents(uniqueContinentNames)
        })
        
    }, [])

    return (
        <>
            <SearchCountryForm searchText={searchText} handleChange={handleChange}/>
            <ContinentsList allCountries={searchedCountry(allCountries, searchText)} allContinents={allContinents}/>
        </>
    )

}




export default Continents