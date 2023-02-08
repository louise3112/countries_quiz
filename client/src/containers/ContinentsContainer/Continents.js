import { useState, useEffect } from "react"
import ContinentsList from "../../components/ContinentsList"
import { getAllCountries } from "../../helpers/countryDataFetches"
import SearchCountryForm from "../../components/SearchCountryForm"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 1.5em;
    min-height: 100vh;
`
const Header = styled.h4`
    font-size: 2em;
    margin: 0.5em 0em 0em 1em;
`

const Continents = () => {

    const [allContinents, setAllContinents] = useState([])
    const [allCountries, setAllCountries] = useState([])
    const [searchText, setSearchText] = useState("")

    const handleChange =function(event) {
        setSearchText(event.target.value)
    }

    const searchedCountry = (allCountries, searchText) => {
        return allCountries.filter((country) => country.name.toLowerCase().includes(searchText.toLowerCase()) || country.code.toLowerCase().includes(searchText))
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
        <Container>
            <Header>Countries by Continent</Header>
            <SearchCountryForm searchText={searchText} handleChange={handleChange}/>
            <ContinentsList allCountries={searchedCountry(allCountries, searchText)} allContinents={allContinents}/>
        </Container>
    )

}




export default Continents