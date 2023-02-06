import React, { useState , useEffect } from "react"
import styled from "styled-components"

const FlagsQuizItem = ({answer , processGuess}) => {
    
    const handleOptionClick = () => {
            processGuess(answer.isCorrect)
    }

    const Answers = styled.li`
    list-style: none;
    `
    const Button = styled.button`
    width: 30em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: #9cc4b4;
    `

    return (
        <Answers>
        <Button onClick={handleOptionClick} >{answer.name}</Button>
      </Answers>
    )
}

export default FlagsQuizItem