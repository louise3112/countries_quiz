import CountryItem from "./CountryItem"
import styled from "styled-components"

const ContinentHeader = styled.h2`
    margin: 0;
`
const ListPerContinent = styled.ul`
    padding: 0;
`

const CountriesList = ({continent, allCountries}) => {

        const sortedCountries = allCountries.sort((x, y) => (x.name > y.name) ? 1 : -1)

        const countryItems = sortedCountries.map((country) => {
            return <CountryItem country={country} key={country._id}/> 
        })

    return (
        <div>
            <ContinentHeader>{continent}</ContinentHeader>
            <ListPerContinent> 
                {countryItems}
            </ListPerContinent>
        </div>
    )

}

export default CountriesList