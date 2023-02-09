import CountryItem from "./CountryItem"
import styled from "styled-components"

const CountriesHeader = styled.h4`
    margin-left: 5em; 
`

const CountriesList = ({allCountries}) => {

        const countryItems = allCountries.map((country) => {
            return <CountryItem country={country} key={country._id}/> 
        })

    return (
        <>
        <CountriesHeader>Countries:</CountriesHeader>
                <ul> 
                    {countryItems}
                    <br></br>
                </ul>
        </>
    )

}

export default CountriesList