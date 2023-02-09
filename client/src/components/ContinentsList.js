import CountriesList from "./CountriesList"
import styled from "styled-components"

const Header = styled.h4`
    font-size: 2em;
    margin-left: 3.7em;
    margin-bottom: 0;
`
const UnorderedList = styled.ul`
    margin:0;
`
const Subheader = styled.h2`
    margin-left: 3.4em;
`

const ContinentsList = ({allContinents, allCountries}) => {
    const countriesByContinent = allContinents.map(continent => {
        const countriesForContinent = allCountries.filter(country => country.continents.includes(continent))
        if (countriesForContinent.length > 0) {
            return (<>
                <Subheader>{continent}</Subheader>
                <CountriesList allCountries= {countriesForContinent}/>
                </>)
        }
    })
    

    return (
        <>
        <Header>Countries in this Continent</Header>
            <UnorderedList>
                {countriesByContinent}
            </UnorderedList>
        </>
    )
}


export default ContinentsList