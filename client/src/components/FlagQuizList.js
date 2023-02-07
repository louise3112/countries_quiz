import React, { useState , useEffect } from "react"
import FlagsQuizItem from "./FlagQuizItem"

const FlagsQuizList = ({answerOptions , processGuess, hasUserAnswered, userCorrect, processRefresh, score, highScore}) => {

    const flagToShowObject = answerOptions.find(option => option.isCorrect)

    const handleRefreshClick = () => {
        processRefresh()
    }

    const listOfAnswerItems = answerOptions.map(answer => {
        return <FlagsQuizItem key={answer._id} answer={answer} processGuess={processGuess} />
    })

    return (
        <div>
            <h2>Current Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
            {flagToShowObject &&<img src={flagToShowObject.flag} />}
            { hasUserAnswered 
                ?  <div><p>{userCorrect ? "You got it! Well Done!" : "Wrong! This flag belongs to " + flagToShowObject.name } </p>
                <button onClick={handleRefreshClick} >Next Flag</button></div>
                : <ul>{listOfAnswerItems}</ul> }
        </div>
    )
}

export default FlagsQuizList