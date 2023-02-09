import QuizItem from "./QuizItem"
import styled from "styled-components"
import Languages from '../containers/images/Languages.jpeg'

const Picture = styled.img`
    height: 14em;
    width: auto; 
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: solid lightgrey;
`
const Language = styled.h3`
    width: 24em;
    position: relative;
    display: block;
    margin: 1em auto 1em auto;
    border: solid lightgrey;
    text-align: center;
`
const Answer = styled.p`
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
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

const QuizList = ({answerOptions , processGuess, hasUserAnswered, userCorrect, processRefresh, user, gameType}) => {

    const countryToShowObject = answerOptions.find(option => option.isCorrect)

    const setQuestion = () => {
        if (countryToShowObject && gameType === "Flag") {
            return <Picture src={countryToShowObject.flag} />
        } else if (countryToShowObject && gameType === "Language") {
            return (
                <div>
                    <Picture src={Languages}/> 
                    <Language>{Object.values(countryToShowObject.language)[0]}</Language>
                </div>
            )
        }
    }

    const questionInfo = setQuestion()

    const handleRefreshClick = () => {
        processRefresh()
    }

    const listOfAnswerItems = answerOptions.map(answer => {
        return <QuizItem key={answer._id} answer={answer} processGuess={processGuess} />
    })

    return (
        <div>
            <ScoreContainer>
                {user[gameType] && <CurrentScore>Current Run: {user[gameType].currentStreak}</CurrentScore>}
                {user[gameType] && <CurrentScore>Best Run: {user[gameType].highStreak}</CurrentScore>}
            </ScoreContainer>
            {user[gameType] && questionInfo} 
            {hasUserAnswered 
                ?  <div><Answer>{userCorrect 
                        ? "You got it! This " + gameType + " belongs to " + countryToShowObject.name + "!"
                        : "Wrong! This " + gameType + " belongs to " + countryToShowObject.name + "!"} </Answer>
                    <Button onClick={handleRefreshClick} >Next {gameType}</Button></div>
                : <ul>{listOfAnswerItems}</ul> }
        </div>
    )
}

export default QuizList
