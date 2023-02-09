import React, { useEffect, useState } from "react";
import { getAllCountries } from "../../helpers/countryDataFetches";
import { randomCountries } from "../../helpers/usefulFunctions";
import { updateAUser } from "../../helpers/statsDataFetches";
import styled from "styled-components";
import Capitals from '../images/Capitals.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh; 
`
const Header = styled.h2`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5em;
    margin: 1em 0em 0.6em 0em;
`
const ContentContainer = styled.div`
    background-color: #96bcb4;
    border-radius: 10px;
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; 
    width: 36em;
    min-height: 24em;
    padding: 1em;
    row-gap: 1em;
`
const CapitalPhoto = styled.img`
    border-radius: 10px;
    background-color:#96bcb4;
    max-width: 80%;
`
const Text = styled.h3`
    margin: 0;
`
const Form = styled.form`
    display: grid;
    grid-template-areas:
        'inputBox submitButton'
        'answerList .';
    align-items: center;
    column-gap: 1em;
`
const Input = styled.input`
    grid-area: inputBox;
    font-size: 1em;
    width: 18em;
    height: 1.5em;
    border-radius: 2px;
`
const SubmitButton = styled.input`
    grid-area: submitButton;
    font-size: 1em;
    width: 8em;
    height: 1.75em;
    cursor: pointer; 
    background-color: #F3DC65;
    border-radius: 6px;
    font-family: 'Oswald', sans-serif;
`
const AnswerList = styled.ul`
    grid-area: answerList;
    list-style: none;
    padding: 0;
    margin: 0;
`
const AnswerItem = styled.li`
    margin: 0.5em 0em 0em 1em;
    text-decoration: underline;
    color: rgb(90, 90, 90);
    cursor: pointer;
    &:hover {color: gold;}
`
const QAContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    row-gap: 1em;
`
const Answer = styled.p`
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
    margin: 0;
`
const Button = styled.button`
    cursor: pointer; 
    height: 4em;
    width: 20em;
    background-color: #F3DC65;
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px; 
    font-family: 'Oswald', sans-serif;
`
const ScoreContainer = styled.div`
    background-color: #5F898A;
    box-shadow: 0 6px 10px #4B5452;
    border-radius: 12px;
    width: 15em;
    height: 7em;
    position: absolute;
    top: 9em;
    right: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CurrentScore = styled.h2`
    margin: 5px; 
    color: #ffff; 
    text-shadow: 2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000;
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
        const result = (userGuess.toLowerCase() === country.name.toLowerCase())
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
            <ContentContainer>
                <CapitalPhoto className='Capitals' src={Capitals} alt='Capitals' />
                {formSubmitted
                    ? <QAContainer>
                        <Answer> {isCorrect
                            ? "You got it! " + country.capital + " is the capital of " + country.name + "!"
                            : "Wrong! " + country.capital + " is the capital of " + country.name + "!"}
                        </Answer>
                        <Button onClick={processRefresh}>Next Capital</Button>
                    </QAContainer>
                    : <QAContainer>
                        <Text>{country.capital} is the capital of which country?</Text>
                        <Form onSubmit={handleSubmit}>
                            <Input type="text" value={userGuess} onChange={handleGuess} />
                            <SubmitButton type="submit" value="Submit guess!" />
                            <AnswerList style={{display: userGuess.length > 0 ? "block" : "none"}}>
                                {filteredCountries.map(country => {
                                    return <AnswerItem onClick={() => handleCountryClick(country.name)} key={country._id}>{country.name}</AnswerItem>
                                })}
                            </AnswerList>
                        </Form>
                    </QAContainer>
                }
            </ContentContainer>
        </Container>
    )
}

export default CapitalsQuiz;

