import CountriesList from "./CountriesList"
import styled from "styled-components"

const ListByContinent = styled.ul`
    margin: 0em 0em 1em 0em;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    column-gap: 3em;
`

const ContinentsList = ({allContinents, allCountries}) => {
    const countriesByContinent = allContinents.map(continent => {
        const countriesForContinent = allCountries.filter(country => country.continents.includes(continent))
        if (countriesForContinent.length > 0) {
            return (<>
                <CountriesList continent={continent} allCountries= {countriesForContinent}/>
                </>)
        }
    })
    

    return (
        <ListByContinent>
            {countriesByContinent}
        </ListByContinent>
    )
}


export default ContinentsList