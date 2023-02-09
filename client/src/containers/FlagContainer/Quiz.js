import { randomCountries, randomIndex, getLanguageForQuestion } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"
import { updateAUser } from "../../helpers/statsDataFetches"
import React, { useState, useEffect } from "react"
import QuizList from "../../components/QuizList"
import styled from "styled-components"
import '../../App.js'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Header = styled.h1`
    position: relative;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2.5em;
    margin-top: 10px; 
    margin-bottom:6px;
`

const Text = styled.h3`
    text-align: center;
    margin-bottom: 18px; 
`

const Quiz = ({gameType, user, updateScores}) => {
    const [answerOptions, setAnswerOptions] = useState([])
    const [userCorrect, setUserCorrect] = useState(false)
    const [hasUserAnswered, sethasUserAnswered] = useState(false)

    const updateUser = (result) => {
        const updatedUser = {...user}
        const newStats = {...updatedUser[gameType]}

        console.log(newStats)
        console.log("current streak before update: " + newStats.currentStreak)

        {result ? newStats.currentStreak += 1 : newStats.currentStreak = 0}
        console.log("current streak after update: " + newStats.currentStreak)
        console.log("high streak before update: " + newStats.highStreak)
        if (result && newStats.currentStreak > newStats.highStreak) {
            newStats.highStreak = newStats.currentStreak
        }

        console.log("current streak after update: " + newStats.currentStreak)
        console.log("high streak after update: " + newStats.highStreak)

        updatedUser[gameType] = newStats
        return updatedUser
    }

    // Maps over the random country array to create a new array with the data we need
    const prepAnswers = (countriesArray) => {
        const randomCountriesArray = randomCountries(countriesArray, 3) // Selects 3 random country objects and puts them in an array
        let indexOfLanguage = -1 // undefined  // Because any number 0 or more could be an array index
        if(gameType == "Language") {
            const languageInSingleCountry = getLanguageForQuestion(randomCountriesArray) // ["English", [{countryObj.name}]]
            if(!languageInSingleCountry) {
                // All options have repeated langauges
                processRefresh()
            }
            
            for(let i=0; i< randomCountriesArray.length; i++) {
                if(languageInSingleCountry[1][0].name == randomCountriesArray[i].name) { 
                    indexOfLanguage = i
                    break;
                }
            }
        }
        const correctAnswerIndex = (gameType=="Flag")?randomIndex(randomCountriesArray.length):indexOfLanguage
        const answersList = randomCountriesArray.map((country, index) => {
            return {
                ...country,
                isCorrect: index === correctAnswerIndex
            }
        }
        )
        return answersList
    }

    const processGuess = (result) => {
        updateScores(updateUser(result))
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

    // {hasUserAnswered && updateAUser(user._id, updateUser(userCorrect))}
    {hasUserAnswered && updateAUser(user._id, user)}

    return (
        <Container>
            <Header>{gameType} Quiz</Header>
            <Text>Guess what country's {gameType.toLowerCase()} this is. Choose from one of the three options below.</Text>
            <QuizList 
                answerOptions={answerOptions} 
                processGuess={processGuess}
                hasUserAnswered={hasUserAnswered} 
                userCorrect={userCorrect}
                processRefresh={processRefresh}
                user={user}
                gameType={gameType}/>
        </Container>
    )

}


export default Quiz