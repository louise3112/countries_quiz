import { randomCountries , randomIndex } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"
import React, { useState , useEffect } from "react"
import FlagsQuizList from "../../components/FlagQuizList"
import styled from "styled-components"

const FlagsQuiz = () => {

    const [answerOptions, setAnswerOptions] = useState([])

    // Maps over the random country array to create a new array with the data we need
    const prepAnswers = (countriesArray) => {
        console.log(countriesArray)
        const randomCountriesArray = randomCountries(countriesArray, 3) // Selects 3 random country objects and puts them in an array
        console.log(randomCountriesArray)
        const correctAnswerIndex = randomIndex(randomCountriesArray.length)
        const answersList = randomCountriesArray.map((country, index) => {
            return {
                ...country,
                isCorrect : index === correctAnswerIndex
            }}
        )
        console.log(answersList)
        return answersList
    }

    const [userCorrect, setUserCorrect] = useState(false)
    const [hasUserAnswered, sethasUserAnswered] = useState(false)

    const processGuess = (result) => {
        setUserCorrect(result)
        sethasUserAnswered(true)
    }

    useEffect(() => {
        getAllCountries()
            .then(allCountries => {
                const selectedAnswers = prepAnswers(allCountries)
                setAnswerOptions(selectedAnswers)
            })
    },[])

    const Text = styled.h3`
    text-align: center;
    `

    return (
        <div>
            <Text>Guess what countries flag this is. Choose from one of the three options below.</Text>
            <FlagsQuizList answerOptions={answerOptions} processGuess={processGuess}
            hasUserAnswered={hasUserAnswered} userCorrect={userCorrect}  />
        </div>
    )

    }


export default FlagsQuiz









    // return (
    //     correctAnswer ? 
    //         <img src={correctAnswer.flag} alt={correctAnswer.name} />
    //     : 
    //         <div>Loading...</div>
    // )

    //   return (
    //     <div>
    //       {hasUserAnswered ? (
    //         <div>
    //           <img src={correctAnswer.flag} alt={correctAnswer.name} />
    //           {userAnswer === correctAnswer.name ? (
    //             <div>Well Done!</div>
    //           ) : (
    //             <div>Unlucky! The correct answer is {correctAnswer.name}</div>
    //           )}
    //         </div>
    //       ) : (
    //         <div>
    //           <img src={correctAnswer.flag} alt={correctAnswer.name} />
    //           {answerOptions.map((option) => (
    //             <button
    //               key={option.name}
    //               onClick={() => handleOptionClick(option.name)}
    //             >
    //               {option.name}
    //             </button>
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   )
