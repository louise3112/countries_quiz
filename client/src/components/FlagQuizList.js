import React, { useState , useEffect } from "react"
import FlagsQuizItem from "./FlagQuizItem"

const FlagsQuizList = ({answerOptions , processGuess, hasUserAnswered, userCorrect}) => {

    const flagToShowObject = answerOptions.find(option => option.isCorrect)

    const listOfAnswerItems = answerOptions.map(answer => {
        return <FlagsQuizItem key={answer._id} answer={answer} processGuess={processGuess} />
    })

    return (
        <div>
            {flagToShowObject &&<img src={flagToShowObject.flag} />}
            { hasUserAnswered 
                ?  <p>{userCorrect ? "you're right" : "you're wrong"} </p>
                : <ul>{listOfAnswerItems}</ul> }
        </div>
    )
}

export default FlagsQuizList