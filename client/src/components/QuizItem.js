import styled from "styled-components"

const Answers = styled.li`
    list-style: none; 
`
const Button = styled.button`
    cursor: pointer; 
    height: 4em;
    width: 56em;
    display: block;
    margin-left: auto; 
    margin-right: auto;
    background-color: #9cc4b4;
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px; 
    font-family: 'Oswald', sans-serif;
`

const QuizItem = ({answer , processGuess}) => {
    
    const handleOptionClick = () => {
            processGuess(answer.isCorrect)
    }

    return (
        <Answers>
            <Button onClick={handleOptionClick} >{answer.name}</Button>
        </Answers>
    )
}

export default QuizItem