import { randomCountries, randomIndex } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"
import React, { useState, useEffect } from "react"
import FlagsQuizList from "../../components/FlagQuizList"
import styled from "styled-components"
import '../../App.js'

const Text = styled.h3`
text-align: center;
margin: 0;
margin-bottom: 1em; 
padding: 15px; 
`

const Header = styled.h1`
position: relative;
text-align: center;
font-family: 'Oswald', sans-serif;
font-size: 2.5em;
margin-top: 10px; 
margin-bottom: 6px; 
`

const FlagsQuiz = () => {

    const [answerOptions, setAnswerOptions] = useState([])

    // Maps over the random country array to create a new array with the data we need
    const prepAnswers = (countriesArray) => {
        const randomCountriesArray = randomCountries(countriesArray, 3) // Selects 3 random country objects and puts them in an array
        const correctAnswerIndex = randomIndex(randomCountriesArray.length)
        const answersList = randomCountriesArray.map((country, index) => {
            return {
                ...country,
                isCorrect: index === correctAnswerIndex
            }
        }
        )
        return answersList
    }

    const [userCorrect, setUserCorrect] = useState(false)
    const [hasUserAnswered, sethasUserAnswered] = useState(false)
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)

    const processGuess = (result) => {
        setScore(result ? score + 1 : 0)
        if (result && score + 1 > highScore) {
            setHighScore(score + 1)
        }
        setUserCorrect(result)
        sethasUserAnswered(true)
    }

    const processRefresh = () => {
        getAllCountries()
            .then(allCountries => {
                const selectedAnswers = prepAnswers(allCountries)
                setAnswerOptions(selectedAnswers)
                setUserCorrect(false)
                sethasUserAnswered(false)
            })
    }

    useEffect(() => {
        getAllCountries()
            .then(allCountries => {
                const selectedAnswers = prepAnswers(allCountries)
                setAnswerOptions(selectedAnswers)
            })
    }, [])


    return (
        <div>
            <Header>Flag Quiz</Header>
            <Text>Guess what countries flag this is. Choose from one of the three options below.</Text>
            <FlagsQuizList answerOptions={answerOptions} processGuess={processGuess}
                hasUserAnswered={hasUserAnswered} userCorrect={userCorrect}
                processRefresh={processRefresh} score={score}
                highScore={highScore} />
        </div>
    )

}


export default FlagsQuiz