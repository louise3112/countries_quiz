import { useState, useEffect } from "react"
import { randomCountries } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"
import { updateAUser } from "../../helpers/statsDataFetches"
import '../../App.js'
import styled from "styled-components"

import PopGameList from "../../components/PopGameList"

const Header = styled.h2`
    text-align: center; 
    font-family: 'Oswald', sans-serif;
    font-size: 2.5em;
`

const Paragraph = styled.p`
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: 1.25em; 
    width: 40%; 
    align-items: center;
    margin: 0 auto;
    margin-bottom: 1em;
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

const PopulationQuiz = ({user, updateScores}) => {


    const [countriesToPlay, setCountriesToPlay] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)
    const [correctGuessCount, setCorrectGuessCount] = useState(0)

    const updateUser = () => {
        // Update user state and DB values with scores:
        const updatedUser = { ...user }
        const newStats = { ...updatedUser.popGame }
        const newGuesses = [...newStats.correctGuesses]
        
        newStats.played += 1
        if (gameWon) { newStats.won += 1 }
        newGuesses.push(correctGuessCount)
        
        newStats.correctGuesses = newGuesses
        updatedUser.popGame = newStats

        return updatedUser
    }

    const newGame = () => {
        // Update the user state value to reflect the game played:
        updateScores(updateUser())

        // Reset all other states for next game:
        getData()
        setGameOver(false)
        setGameWon(false)
        setCorrectGuessCount(0)
    }

    const processAnswer = (country, answer) => {
        const updatedCountries = countriesToPlay.map(singleCountry => {
            return { ...singleCountry }
        })

        updatedCountries[country.cardPosition].status = "previous"
        updatedCountries[country.cardPosition - 1].status = "played"

        if (country.answer === answer) {
            updatedCountries[country.cardPosition].guessCorrect = true
            const updatedCorrectGuesses = correctGuessCount + 1
            setCorrectGuessCount(updatedCorrectGuesses)
        } else {
            updatedCountries[country.cardPosition].guessCorrect = false
        }

        if (country.cardPosition === countriesToPlay.length - 1) {
            setGameOver(true)
            setGameWon(updatedCountries[country.cardPosition].guessCorrect)
        } else if (!updatedCountries[country.cardPosition].guessCorrect) {
            setGameOver(true)
        } else {
            updatedCountries[country.cardPosition + 1].status = "current"
        }

        setCountriesToPlay(updatedCountries)
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
    }, [user])

    {gameOver && updateAUser(user._id, updateUser())}

    return (
        <div>
            <Header>Play Your Population Right!</Header>
            <ScoreContainer>
                {user.popGame && <Scores>Games Played: {user.popGame.played}</Scores>}
                {user.popGame && <Scores>Games Won: {user.popGame.won}</Scores>}
            </ScoreContainer> 
            {!gameOver && <Paragraph>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country. </Paragraph>}
            <PopGameList countries={countriesToPlay} processAnswer={processAnswer} gameOver={gameOver} gameWon={gameWon} newGame={newGame}/>
        </div>
    )
}

export default PopulationQuiz

// Link to page for cross png
// https://www.flaticon.com/free-icon/close_463612?related_id=463612&origin=pack&fbclid=IwAR23yaC_Ml-oMjs9i-Ir85FldUFSnClU4MNb1fj995onbT3ebNBqscbMsZE


// Link to page for tick png
// hhttps://www.flaticon.com/free-icon/check_463574?term=tick&page=1&position=30&origin=search&related_id=463574&fbclid=IwAR0ooWBTNftJobZvvv0NgtzdxX23Ue8E1L45P-alcVmsvv6Yq177VVkWArY

