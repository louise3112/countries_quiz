import { useState, useEffect } from "react"
import { randomCountries } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"
import { updateAUser } from "../../helpers/statsDataFetches"

import PopGameList from "../../components/PopGameList"


const PopulationQuiz = ({user, updateScores}) => {

    const [countriesToPlay, setCountriesToPlay] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)
    const [correctGuessCount, setCorrectGuessCount] = useState(0)

    const newGame = () => {
        // Update user state and DB values with scores:
        const updatedUser = {...user}
        const newStats = {...updatedUser.popGame}
        const newGuesses = [...newStats.correctGuesses]

        newStats.played += 1
        if (gameWon) {newStats.won += 1}
        newGuesses.push(correctGuessCount)

        newStats.correctGuesses = newGuesses
        updatedUser.popGame = newStats
        updateAUser(user._id, updatedUser)
        updateScores(updatedUser)

        // Reset all other states for next game:
        getData()
        setGameOver(false)
        setGameWon(false)
        setCorrectGuessCount(0)
    }

    const processAnswer = (country, answer) => {
        const updatedCountries = countriesToPlay.map(singleCountry => {
            return {...singleCountry}
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
            return {...country, 
                    status: "none", 
                    answer: "", 
                    cardPosition: index, 
                    guessCorrect: null}
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

    useEffect( () => {
        getData()
    }, [user])

    return (
        <div>
            <h2>Play Your Population Right!</h2>
            {user.popGame && <h4>Games Played: {user.popGame.played} &nbsp; &nbsp; | &nbsp; &nbsp; Games Won: {user.popGame.won}</h4>}
            <p>Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country and select the relevant button! </p>
            <PopGameList countries={countriesToPlay} processAnswer={processAnswer} gameOver={gameOver} gameWon={gameWon} newGame={newGame}/>
        </div>
    )
}

export default PopulationQuiz
