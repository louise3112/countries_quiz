import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../helpers/countryDataFetches";
import styled from "styled-components";
import Capitals from '../images/Capitals.jpg'

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh; 
`

const Header = styled.h1`
font-size: 2.5em; 
text-align: center;
margin: 2px; 
`

const ContentContainer = styled.div`
border-bottom-right-radius:10px;
border-bottom-left-radius: 10px; 
display: flex; 
align-items: center; 
justify-content: center; 
width: 29.9em;
margin-left: auto;
margin-right: auto;
margin-bottom: 30px;
background-color: #96bcb4;
`;

const CapitalPhoto = styled.img`
border-top-right-radius: 10px; 
border-top-left-radius: 10px; 
background-color:#96bcb4;
margin: 2em 0;
padding: 0.9em; 
display: block;
margin: 0 auto;
max-width: 100%;
`
const Input = styled.input`
width: 70%;
`

const CountriesQuiz = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [country, setCountry] = useState({});
    const [userGuess, setUserGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        getAllCountries().then(data => {
            setCountries(data);
            setFilteredCountries(data);
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedCountry = data[randomIndex];
            setCountry(selectedCountry);
        });
    }, []);

    useEffect(() => {
        if (userGuess.length >= 2) {
            setFilteredCountries(
                countries.filter(
                    country =>
                        country.name.toLowerCase().indexOf(userGuess.toLowerCase()) !==
                        -1
                )
            );
        } else {
            setFilteredCountries([]);
        }
    }, [userGuess]);

    const handleGuess = evt => {
        setUserGuess(evt.target.value);
    };

    const handleCountryClick = countryName => {
        setUserGuess(countryName);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setIsCorrect(userGuess === country.name);
        setFormSubmitted(true);
    };

    const processRefresh = () => {
        getAllCountries().then(data => {
            setCountries(data);
            setFilteredCountries(data);
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedCountry = data[randomIndex];
            setCountry(selectedCountry);
            setUserGuess("");
            setFormSubmitted(false)
        });
    }

    const handleRefreshClick = () => {
        processRefresh()
    }

    return (
        <Container>
        <Header>Capitals Quiz</Header>
        <CapitalPhoto className='Capitals' src={Capitals} alt='Capitals' />
        <ContentContainer>
            <form onSubmit={handleSubmit}>
                <h4>
                    <p>{country.capital} is the capital of which country?</p>
                    <Input type="text" value={userGuess} onChange={handleGuess} />
                    <button type="submit">Submit</button>
                    {formSubmitted && !isCorrect && (
                        <p>Incorrect. The correct answer is: {country.name}</p>
                    )}
                    {formSubmitted && isCorrect && <p>Correct!</p>}
                </h4>
                <div style={{ display: userGuess.length > 0 ? "block" : "none" }}>
                    {filteredCountries.map(country => (
                        <p onClick={() => handleCountryClick(country.name)}>
                            {country.name}
                        </p>
                    ))}
                </div>
            </form>
            <button onClick={handleRefreshClick} >Next Capital</button>
        </ContentContainer>
        </Container>
    );
};

export default CountriesQuiz;
