import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getACountry } from "../helpers/countryDataFetches"
import styled from "styled-components"

const StyledDiv = styled.div`
margin:10px; 
display: flex;
align-items: center;
justify-content: center;
align-content: center; 
`;

const Container = styled.div`
align-items: center;
align-content: center; 
justify-content: center;
border: solid lightgrey; 
border-radius: 20px; 
height: 31em;
width: 35em;  
padding: 1em; 
background-color: #96bcb4; 
`;

const Flag = styled.img`
margin-left: auto;
margin-right: auto;  
display: flex; 
height: 6em; 
width: auto;
align-items: center;
justify-content: center; 
border: solid grey; 
`
const CountryInfo = styled.div`
text-align: center;
`
const CountryInfoTitle = styled.h4`
font-size: 18px; 
text-align: center;
`

const Country = () => {
    const { id } = useParams()

    const [countryDetails, setCountryDetails] = useState({})

    useEffect(() => {
        getACountry(id)
            .then(result => setCountryDetails(result))
    })

    const joinString = (objectValues) => {
        console.log(objectValues)
        return objectValues ? Object.values(objectValues).join(", ") : ""
    }

    const joinStringNestedObject = (objectValues) => {
        console.log(objectValues)
        return objectValues ? Object.values(objectValues).map(currency => currency.name).join(", ") : ""
    }

    return (
        <>
            <StyledDiv>
                <Container>
                    <Flag src={countryDetails.flag} width="100"></Flag>
                    <CountryInfoTitle>Country Details</CountryInfoTitle>
                    <CountryInfo>
                    <p><strong>Country Name:</strong> {countryDetails.name}</p>
                    <p><strong>Country Region:</strong> {countryDetails.region}</p>
                    <p><strong>Country Subregion:</strong> {countryDetails.subregion}</p>
                    <p><strong>Languages:</strong> {joinString(countryDetails.language)}</p>
                    <p><strong>Currency:</strong> {joinStringNestedObject(countryDetails.currencies)}</p>
                    <p><strong>Borders:</strong> {countryDetails.borders ? countryDetails.borders.join(", ") : ""}</p>
                    <p><strong>Population:</strong> {countryDetails.population}</p>
                    <p><strong>Capital:</strong> {countryDetails.capital}</p>
                    <p><strong>Latitude:</strong> {countryDetails.latitude}</p>
                    <p><strong>Latitude:</strong> {countryDetails.latitude}</p>
                    </CountryInfo>
                </Container>
            </StyledDiv>
        </>
    )
}

export default Country