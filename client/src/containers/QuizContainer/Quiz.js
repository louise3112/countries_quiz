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
        setIsCorrect(userGuess === country.capital);
    };


    return (
        <form onSubmit={handleSubmit}>
            <h4>
                <p>Country: {country.name}</p>
                <p>What is the capital of {country.name}?</p>
                <input type="text" value={userGuess} onChange={handleGuess} />
                <button type="submit">Submit</button>
                {isCorrect ? <p>Correct!</p>
                    : <p>Incorrect. The correct answer is: {country.capital}</p>}
            </h4>
        </form>
    );
};

export default CountriesQuiz;
