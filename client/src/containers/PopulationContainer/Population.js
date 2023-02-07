import { useState, useEffect } from "react"
import { randomCountries } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"
import '../../App.js'
import styled from "styled-components"

import PopGameList from "../../components/PopGameList"

const Header = styled.h2`
text-align: center; 
font-family: 'Oswald', sans-serif;
font-size: 2.5em;
`
// const SubHeader = styled.h4`
// text-align: center; 
// font-family: 'Oswald', sans-serif;
// `
const Paragraph = styled.p`
text-align: center;
font-family: 'Oswald', sans-serif;
font-size: 18px; 
width: 40%; 
align-items: center;
margin: 0 auto;
margin-bottom: 3em; 
`
const ScoreContainer = styled.div`
font-size: 16px; 
font-weight: bold; 
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
text-align: center; 
margin-top: 0em;
color: #ffff; 
text-shadow: 2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000;
`
const Scores = styled.h2`
text-align: center; 
margin: 5px; 
`


const PopulationQuiz = () => {

    const [countriesToPlay, setCountriesToPlay] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)
    const [gameStats, setGameStats] = useState({
        played: 0,
        won: 0,
        correctGuesses: []
    })

    const newGame = () => {
        // Update gameStats state:
        const stats = { ...gameStats }
        stats.played += 1
        if (gameWon) { stats.won += 1 }
        setGameStats(stats)

        // Reset all other states for next game:
        getData()
        setGameOver(false)
        setGameWon(false)
    }

    const processAnswer = (country, answer) => {
        const updatedCountries = countriesToPlay.map(singleCountry => {
            return { ...singleCountry }
        })
        const stats = { ...gameStats }

        updatedCountries[country.cardPosition].status = "previous"
        updatedCountries[country.cardPosition - 1].status = "played"

        { country.answer === answer ? updatedCountries[country.cardPosition].guessCorrect = true : updatedCountries[country.cardPosition].guessCorrect = false }

        if (country.cardPosition === countriesToPlay.length - 1) {
            setGameOver(true)
            setGameWon(updatedCountries[country.cardPosition].guessCorrect)
            { country.answer === answer ? stats.correctGuesses.push(country.cardPosition) : stats.correctGuesses.push(country.cardPosition - 1) }

        } else if (!updatedCountries[country.cardPosition].guessCorrect) {
            setGameOver(true)
            stats.correctGuesses.push(country.cardPosition - 1)
        } else {
            updatedCountries[country.cardPosition + 1].status = "current"
        }

        setCountriesToPlay(updatedCountries)
        setGameStats(stats)
    }

    const getAnswer = (array, index, keyToCheck) => {
        if (array[index][keyToCheck] >= array[index - 1][keyToCheck]) {
            return "higher"
        } else {
            return "lower"
        }
    }

    const prepCountries = (countriesArray) => {
        const countriesToUse = randomCountries(countriesArray, 6)
        const countriesReadyToPlay = countriesToUse.map((country, index) => {
            return {
                ...country,
                status: "none",
                answer: "",
                cardPosition: index,
                guessCorrect: null
            }
        })
        countriesReadyToPlay[0].status = "previous"
        countriesReadyToPlay[1].status = "current"

        for (let i = 1; i < countriesReadyToPlay.length; i++) {
            countriesReadyToPlay[i].answer = getAnswer(countriesReadyToPlay, i, "population")
        }
        return countriesReadyToPlay
    }

    const getData = () => {
        getAllCountries()
            .then(allCountries => {
                const selectedCountries = prepCountries(allCountries)
                setCountriesToPlay(selectedCountries)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Header>Play Your Population Right!</Header>
            <ScoreContainer>
            <Scores>Games Played: {gameStats.played}</Scores>
            <Scores>Games Won: {gameStats.won}</Scores> 
            </ScoreContainer> 
            <Paragraph>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! </Paragraph>
            <PopGameList countries={countriesToPlay} processAnswer={processAnswer} gameOver={gameOver} gameWon={gameWon} newGame={newGame} />
        </div>
    )
}

export default PopulationQuiz
