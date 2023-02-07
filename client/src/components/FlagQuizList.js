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

const FlagsQuizList = ({answerOptions , processGuess, hasUserAnswered, userCorrect}) => {

    const flagToShowObject = answerOptions.find(option => option.isCorrect)

    const listOfAnswerItems = answerOptions.map(answer => {
        return <FlagsQuizItem key={answer._id} answer={answer} processGuess={processGuess} />
    })


    return (
        <div>
            {flagToShowObject &&<Flag src={flagToShowObject.flag}></Flag>}
            { hasUserAnswered 
                ?  <Answer>{userCorrect ? "you're right" : "you're wrong"} </Answer>
                : <ul>{listOfAnswerItems}</ul> }
        </div>
    )
}

export default FlagsQuizList