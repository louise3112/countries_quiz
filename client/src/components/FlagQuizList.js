import React, { useState , useEffect } from "react"
import FlagsQuizItem from "./FlagQuizItem"
import styled from "styled-components"

const Flag = styled.img`
height: 14em;
width: auto; 
position: relative;
display: block;
margin-left: auto;
margin-right: auto;
border: solid lightgrey;
`
const Answer = styled.p`
text-align: center;
`
const CurrentScore = styled.h2`
left: 1em; 
text-align: center; 
margin: 5px; 
color: #ffff; 
text-shadow: 2px 2px 0px  #000, -2px -2px 0px  #000, 2px -2px 0px  #000, -2px 2px 0px  #000;
`
const ScoreContainer = styled.div`
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
`
const Button = styled.button`
cursor: pointer; 
height: 4em;
width: 20em;
display: block;
margin-left: auto; 
margin-right: auto;
background-color: #F3DC65;
border-radius: 6px;
font-weight: bold;
font-size: 14px; 
font-family: 'Oswald', sans-serif;
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
            <ScoreContainer>
            <CurrentScore>Current Score: {score}</CurrentScore>
            <CurrentScore>High Score: {highScore}</CurrentScore>
            </ScoreContainer>
            {flagToShowObject &&<Flag src={flagToShowObject.flag}></Flag>}
            { hasUserAnswered 
                ?  <div><Answer>{userCorrect ? "You got it! Well Done!" : "Wrong! This flag belongs to " + flagToShowObject.name } </Answer>
                <Button onClick={handleRefreshClick} >Next Flag</Button></div>
                : <ul>{listOfAnswerItems}</ul> }
        </div>
    )
}

export default FlagsQuizList