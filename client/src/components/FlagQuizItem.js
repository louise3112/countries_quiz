import React, { useState , useEffect } from "react"

const FlagsQuizItem = ({answer , processGuess}) => {
    
    const handleOptionClick = () => {
            processGuess(answer.isCorrect)
    }

    return (
        <li>
        <button onClick={handleOptionClick} >{answer.name}</button>
      </li>
    )
}

export default FlagsQuizItem