import { randomCountries , randomIndex } from "../../helpers/usefulFunctions"
import { getAllCountries } from "../../helpers/countryDataFetches"
import React, { useState } from "react"

const FlagsQuiz = () => {

    const randomCountriesArray = randomCountries(getAllCountries(), 3) // Selects 3 random country objects and puts them in an array
    
    const correctAnswerIndex = randomIndex(randomCountriesArray.length) // Generates a random index

    // Maps over the random country array to create a new array with the data we need
    const [answerOptions, setAnswerOptions] = useState( 
        randomCountriesArray.map((country, index) => {
            return {
                name : country.name.common,
                isCorrect : index === correctAnswerIndex,   // Sets 'isCorrect' to true if index matches our correct answer index, otherwise false
                flag : country.flag.svg,
             }
        })
    )

    const correctAnswer = answerOptions.find(option => option.isCorrect)    // Assigns the correct answer object to a variable

    const [userAnswer, setUserAnswer] = useState(null)
    const [hasUserAnswered, sethasUserAnswered] = useState(false)

    const handleOptionClick = (answer) => {
        setUserAnswer(answer)
        sethasUserAnswered(true)
    }

      return (
        <div>
          {hasUserAnswered ? (
            <div>
              <img src={correctAnswer.flag} alt={correctAnswer.name} />
              {userAnswer === correctAnswer.name ? (
                <div>Well Done!</div>
              ) : (
                <div>Unlucky! The correct answer is {correctAnswer.name}</div>
              )}
            </div>
          ) : (
            <div>
              <img src={correctAnswer.flag} alt={correctAnswer.name} />
              {answerOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleOptionClick(option.name)}
                >
                  {option.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )
    }


export default FlagsQuiz
