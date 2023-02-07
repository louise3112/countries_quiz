import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../helpers/countryDataFetches";

const CountriesQuiz = () => {
    const [country, setCountry] = useState({});
    const [userGuess, setUserGuess] = useState("")
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        getAllCountries().then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const selectedCountry = data[randomIndex];
            setCountry(selectedCountry);
            console.log(setCountry);
        });
    }, []);

    const handleGuess = (evt) => {
        setUserGuess(evt.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsCorrect(userGuess === country.name);
    };


    return (
        <form onSubmit={handleSubmit}>
            <h4>
                <p>{country.capital} is the capital of which country?</p>
                <input type="text" value={userGuess} onChange={handleGuess} />
                <button type="submit">Submit</button>
                {isCorrect ? <p>Correct!</p>
                    : <p>Incorrect. The correct answer is: {country.name}</p>}
            </h4>
        </form>
    );
};

export default CountriesQuiz;
