import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../helpers/countryDataFetches";
import { randomCountries } from "../../helpers/usefulFunctions";
import { updateAUser } from "../../helpers/statsDataFetches";
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
    margin-top: 10px; 
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
`
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
const Answer = styled.p`
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
`
const Button = styled.button`
    cursor: pointer; 
    height: 4em;
    width: 20em;
    display: block;
    margin-left: auto; 
    margin-right: auto;
    background-color: #F3DC65;
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px; 
    font-family: 'Oswald', sans-serif;
`

const CountriesQuiz = ({user, updateScores}) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [country, setCountry] = useState({});
    const [userGuess, setUserGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const getData = () => {
        getAllCountries()
            .then(allCountries => {
                setCountries(allCountries);
                setFilteredCountries(allCountries)
                const selectedCountry = randomCountries(allCountries, 1);
                setCountry(selectedCountry[0]);
        });
    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        if (userGuess.length >= 2) {
            setFilteredCountries(countries.filter(country => {
                return country.name.toLowerCase().indexOf(userGuess.toLowerCase()) !== -1}))
        // } else {
        //     setFilteredCountries([])
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
        getData()
        setUserGuess("")
        setFormSubmitted(false)
    }

    return (
        <Container>
            <Header>Capitals Quiz</Header>
            <CapitalPhoto className='Capitals' src={Capitals} alt='Capitals' />
            <ContentContainer>
                <p>{country.capital} is the capital of which country?</p>
                {formSubmitted && isCorrect 
                    ? <p>Correct!</p>
                    : <p> Incorrect. The correct answer is {country.name}!</p>}

                {formSubmitted
                    ? <div>
                        <Answer> {isCorrect
                            ? "You got it! " + country.capital + " is the capital of " + country.name + "!"
                            : "Wrong! " + country.capital + " is the capital of " + country.name + "!"}
                        </Answer>
                        <Button onClick={processRefresh}>Next Capital</Button>
                    </div>
                    : <form>

                    </form>}

                {/* <form onSubmit={handleSubmit}>
                    <h4>
                        <Input type="text" value={userGuess} onChange={handleGuess} />
                        <button type="submit">Submit</button>
                    </h4>
                    <div style={{ display: userGuess.length > 0 ? "block" : "none" }}>
                        {filteredCountries.map(country => (
                            <p onClick={() => handleCountryClick(country.name)}>
                                {country.name}
                            </p>
                        ))}
                    </div>
                </form> */}
            </ContentContainer>
        </Container>
    );
};

export default CountriesQuiz;


                // {/* <form onSubmit={handleSubmit}>
                //     <h4>
                //         <p>{country.capital} is the capital of which country?</p>
                //         <Input type="text" value={userGuess} onChange={handleGuess} />
                //         <button type="submit">Submit</button>
                //         {formSubmitted && !isCorrect && (
                //             <p>Incorrect. The correct answer is: {country.name}</p>
                //         )}
                //         {formSubmitted && isCorrect && <p>Correct!</p>}
                //     </h4>
                //     <div style={{ display: userGuess.length > 0 ? "block" : "none" }}>
                //         {filteredCountries.map(country => (
                //             <p onClick={() => handleCountryClick(country.name)}>
                //                 {country.name}
                //             </p>
                //         ))}
                //     </div>
                // </form>
                // {formSubmitted && <button onClick={processRefresh}>Next Capital</button>} */}
