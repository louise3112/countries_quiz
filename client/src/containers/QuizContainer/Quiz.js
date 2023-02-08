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
    flex-direction: column;
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
const CurrentScore = styled.h2`
    left: 1em; 
    text-align: center; 
    margin: 5px; 
    color: #ffff; 
    text-shadow: 2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000;
`
const ScoreContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #5F898A;
    align-items: center;
    width: 15em;
    margin: 0 auto;
    position: absolute;
    right: 2em;
    top: 9em;
    height: 7em;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    border-radius: 12px; 
    box-shadow: 0 6px 10px #4B5452;
`

const CapitalsQuiz = ({user, updateScores}) => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [country, setCountry] = useState({})
    const [userGuess, setUserGuess] = useState("")
    const [isCorrect, setIsCorrect] = useState(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const updateUser = (result) => {
        const updatedUser = {...user}
        const newStats = {...updatedUser.capitals}

        {result ? newStats.currentStreak += 1 : newStats.currentStreak = 0}
        if (result && newStats.currentStreak > newStats.highStreak) {
            newStats.highStreak = newStats.currentStreak
        }

        updatedUser.capitals = newStats
        return updatedUser
    }

    const getData = () => {
        getAllCountries()
            .then(allCountries => {
                setCountries(allCountries)
                setFilteredCountries(allCountries)
                const selectedCountry = randomCountries(allCountries, 1)
                setCountry(selectedCountry[0])
        })
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (userGuess.length >= 2) {
            setFilteredCountries(countries.filter(country => {
                return country.name.toLowerCase().indexOf(userGuess.toLowerCase()) !== -1}))
        }
    }, [userGuess])

    const handleGuess = (evt) => {setUserGuess(evt.target.value)}

    const handleCountryClick = (countryName) => {setUserGuess(countryName)}

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const result = (userGuess === country.name)
        setIsCorrect(result)
        setFormSubmitted(true)
        updateScores(updateUser(result))
    }

    const processRefresh = () => {
        getData()
        setUserGuess("")
        setFormSubmitted(false)
    }

    {formSubmitted && updateAUser(user._id, user)}

    return (
        <Container>
            <Header>A Question of Capitals</Header>
            <ScoreContainer>
                {user.capitals && <CurrentScore>Current Run: {user.capitals.currentStreak}</CurrentScore>}
                {user.capitals && <CurrentScore>Best Run: {user.capitals.highStreak}</CurrentScore>}
            </ScoreContainer>
            <CapitalPhoto className='Capitals' src={Capitals} alt='Capitals' />
            <ContentContainer>
                <p>{country.capital} is the capital of which country?</p>
                {formSubmitted
                    ? <div>
                        <Answer> {isCorrect
                            ? "You got it! " + country.capital + " is the capital of " + country.name + "!"
                            : "Wrong! " + country.capital + " is the capital of " + country.name + "!"}
                        </Answer>
                        <Button onClick={processRefresh}>Next Capital</Button>
                    </div>
                    : <form onSubmit={handleSubmit}>
                        <Input type="text" value={userGuess} onChange={handleGuess} />
                        <input type="submit" value="Submit guess!" />
                        <ul style={{display: userGuess.length > 0 ? "block" : "none"}}>
                            {filteredCountries.map(country => {
                                return <li onClick={() => handleCountryClick(country.name)} key={country._id}>{country.name}</li>
                            })}
                        </ul>
                    </form>
                }
            </ContentContainer>
        </Container>
    )
}

export default CapitalsQuiz;

