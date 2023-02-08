import CountriesList from "./CountriesList"
import styled from "styled-components"

const Header = styled.h4`
    font-size: 2em;
    margin-left: 1.2em;
    margin-bottom: 0;
`

const ContinentsList = ({allContinents, allCountries}) => {
    const countriesByContinent = allContinents.map(continent => {
        const countriesForContinent = allCountries.filter(country => country.continents.includes(continent))
        if (countriesForContinent.length > 0) {
            return (<>
                <h2>{continent}</h2>
                <CountriesList allCountries= {countriesForContinent}/>
                </>)
        }
    })
    

    return (
        <>
        <Header>Countries in this Continent</Header>
            <ul>
                {countriesByContinent}
            </ul>
        </>
    )
}


export default ContinentsList