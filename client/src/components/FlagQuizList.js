import React, { useState , useEffect } from "react"
import FlagsQuizItem from "./FlagQuizItem"
import styled from "styled-components"

const Flag = styled.img`
width: 30em;
position: relative;
display: block;
margin-left: auto;
margin-right: auto;
border: solid lightgrey;
`
const Answer = styled.p`
text-align: center;
`

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
            {flagToShowObject &&<Flag src={flagToShowObject.flag}></Flag>}
            { hasUserAnswered 
                ?  <div><Answer>{userCorrect ? "You got it! Well Done!" : "Wrong! This flag belongs to " + flagToShowObject.name } </Answer>
                <button onClick={handleRefreshClick} >Next Flag</button></div>
                : <ul>{listOfAnswerItems}</ul> }
        </div>
    )
}

export default FlagsQuizList